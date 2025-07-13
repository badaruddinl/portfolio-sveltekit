import * as auth from '$lib/server/auth';
import { fail, redirect } from '@sveltejs/kit';
import { getRequestEvent } from '$app/server';
import type { Actions, PageServerLoad, RequestEvent } from './$types';

export const load: PageServerLoad = async () => {
	const users = requireLogin();
	return { users };
};

export const actions: Actions = {
	logout: async (event: RequestEvent) => {
		if (!event.locals.session) {
			return fail(401);
		}
		await auth.invalidateSession(event.locals.session.id);
		auth.deleteSessionTokenCookie(event);

		return redirect(302, '/auth/login');
	}
};

function requireLogin() {
	const { locals } = getRequestEvent();

	if (!locals.users) {
		return redirect(302, '/auth/login');
	}

	return locals.users;
}
