<script lang="ts">
	import { enhance } from '$app/forms';
	import type { PageServerData } from './$types';

	let { data }: { data: PageServerData } = $props();
</script>

<h1>Hi, {data.users.username}!</h1>
<p>Your user ID is {data.users.id}.</p>
<form method="post" action="?/logout" use:enhance>
	<button class="cursor-pointer hover:text-blue-400">Sign out</button>
</form>
