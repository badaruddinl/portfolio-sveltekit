<script context="module" lang="ts">
	export const ssr = true;
</script>

<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/state';

	export let items: { label: string; href: string }[] = [];
</script>

<nav class="flex items-center justify-between rounded-b-md bg-amber-300 px-4">
	<div class="text-lg font-semibold">Home</div>
	<ul class="flex items-center">
		{#each items as item}
			<li>
				<button
					on:click={() => goto(item.href)}
					class="w-full cursor-pointer px-3 py-4 text-left text-sm transition-all delay-100 duration-300 hover:bg-yellow-500"
					class:font-normal={page.url.pathname !== item.href}
					class:font-extrabold={page.url.pathname === item.href}
					class:bg-yellow-500={page.url.pathname === item.href}
					class:text-white={page.url.pathname === item.href}
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
