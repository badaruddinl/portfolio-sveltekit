<script lang="ts">
	import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';
	import type { ActionData } from './$types';

	let { form }: { form: ActionData } = $props();
</script>

<div class="flex h-lvh min-w-screen items-center justify-center">
	<div class="flex w-full flex-col items-center justify-center px-4 md:w-1/4 md:px-0">
		<button
			class="mb-4 w-8 cursor-pointer rounded-full bg-amber-400 p-1 hover:bg-yellow-500"
			onclick={() => goto('/')}
		>
			<img src="/logo/Logo.svg" alt="Logo" width="auto" />
		</button>

		<form method="post" action="?/login" class="flex w-full flex-col space-y-2" use:enhance>
			<label>
				<input
					placeholder="Username"
					name="username"
					class="mt-1 w-full rounded-md border border-gray-300 bg-white px-3 py-2 shadow-sm focus:border-amber-300 focus:ring-2 focus:ring-amber-300 focus:outline-none"
				/>
			</label>
			<label>
				<input
					placeholder="Password"
					type="password"
					name="password"
					class="mt-1 w-full rounded-md border border-gray-300 bg-white px-3 py-2 shadow-sm focus:border-amber-300 focus:ring-2 focus:ring-amber-300 focus:outline-none"
				/>
			</label>
			<button
				class="cursor-pointer rounded-md bg-amber-300 px-4 py-2 text-black transition hover:bg-amber-400"
				>Login</button
			>
			<!-- <button
				formaction="?/register"
				class="rounded-md bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
				>Register</button
			> -->
		</form>
		<p style="color: red">{form?.message ?? ''}</p>
	</div>
</div>
