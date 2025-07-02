<script context="module" lang="ts">
	export const ssr = true;
</script>

<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	export let items: { label: string; href: string }[] = [];

	// Reactive path tracking
	$: currentPath = $page.url.pathname;

	function navigate(href: string) {
		goto(href);
	}
</script>

<nav class="flex items-center justify-between rounded-b-md bg-amber-300 px-4">
	<div class="text-lg font-semibold">Home</div>
	<ul class="flex items-center">
		{#each items as item}
			<li>
				<button
					on:click={() => goto(item.href)}
					class="w-full cursor-pointer px-3 py-4 text-left text-sm transition-all delay-100 duration-300 hover:bg-yellow-500"
					class:font-normal={currentPath !== item.href}
					class:font-extrabold={currentPath === item.href}
					class:bg-yellow-500={currentPath === item.href}
					class:text-white={currentPath === item.href}
				>
					<span class="font-semibold">
						{item.label}
					</span>
				</button>
			</li>
		{/each}
	</ul>
</nav>
<slot />
