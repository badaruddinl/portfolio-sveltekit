// for information about these interfaces
declare global {
	namespace App {
		interface Locals {
			users: import('$lib/server/auth').SessionValidationResult['users'];
			session: import('$lib/server/auth').SessionValidationResult['session'];
		}
	}
}

export {};
