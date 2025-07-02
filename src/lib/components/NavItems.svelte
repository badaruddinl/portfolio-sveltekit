<script lang="ts">
	import { page } from '$app/state';
	export let items: {
		label: string;
		href: string;
	}[] = [];
	$: currentPath = page.url.pathname;
</script>

<nav class="flex items-center justify-between rounded-b-md bg-amber-300 px-4">
	<div class="text-lg font-semibold">Home</div>
	<ul class="flex items-center">
		{#each items as item}
			<li
				class="cursor-pointer px-3 py-4 transition-all delay-100 duration-300 hover:bg-yellow-500"
				class:bg-yellow-500={currentPath === item.href}
			>
				<a href={item.href}> {item.label} </a>
			</li>
		{/each}
	</ul>
</nav>
<slot />
