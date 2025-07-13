import { redirect } from '@sveltejs/kit';

export function load() {
	// HTTP 307: Temporary Redirect
	throw redirect(307, '/auth/login');
}
