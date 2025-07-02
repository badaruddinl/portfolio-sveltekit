<script context="module" lang="ts">
	export const ssr = true;
</script>

<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/state';

	export let items: { label: string; href: string }[] = [];
</script>

<nav class="flex items-center justify-between rounded-b-md bg-amber-300 pr-4">
	<button
		onclick={() => goto(items[0].href)}
		class="px-2 py-3 text-lg font-semibold hover:cursor-pointer hover:rounded-bl-sm hover:bg-yellow-500"
	>
		<img src="/logo/Logo.svg" alt="Logo" class="h-7" />
	</button>
	<ul class="flex items-center">
		{#each items as item}
			<li>
				<button
					onclick={() => goto(item.href)}
					class="w-full cursor-pointer px-3 py-4 text-left text-sm transition-all delay-100 duration-300 hover:bg-yellow-500"
					class:font-normal={page.url.pathname !== item.href}
					class:font-extrabold={page.url.pathname === item.href}
					class:bg-yellow-500={page.url.pathname === item.href}
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
