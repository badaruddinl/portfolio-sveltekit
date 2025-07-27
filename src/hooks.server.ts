import type { Handle } from '@sveltejs/kit';
import * as auth from '$lib/server/auth';
import dotenv from 'dotenv';
dotenv.config();

const handleAuth: Handle = async ({ event, resolve }) => {
	const sessionToken = event.cookies.get(auth.sessionCookieName);

	if (!sessionToken) {
		event.locals.users = null;
		event.locals.session = null;
		return resolve(event);
	}

	const { session, users } = await auth.validateSessionToken(sessionToken);

	if (session) {
		auth.setSessionTokenCookie(event, sessionToken, session.expiresAt);
	} else {
		auth.deleteSessionTokenCookie(event);
	}

	event.locals.users = users;
	event.locals.session = session;
	return resolve(event);
};

export const handle: Handle = handleAuth;
