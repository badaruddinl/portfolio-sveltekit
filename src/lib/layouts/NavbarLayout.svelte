<script lang="ts">
	import { page } from '$app/stores';
	import { derived } from 'svelte/store';

	const pages = [
		{
			path: '/',
			name: 'Badarudd.in'
		}
		// Future links can be added here
	];

	const currentPath = derived(page, ($page) => $page.url.pathname);
</script>

<nav class="fixed top-0 z-50 w-full bg-[#FFE066]">
	<div class="flex">
		<ul class="flex flex-row text-sm">
			<li class="px-5 py-5 font-medium text-black duration-200 hover:bg-[#FFCC00] dark:text-black">
				<a href="/">
					<img class="w-5" src="/logo/Logo.svg" alt="logo" />
				</a>
			</li>
		</ul>
		<ul class="ml-auto flex flex-row text-sm">
			{#each pages as page}
				{#key page.path}
					{#if $currentPath === page.path}
						<li
							class="px-3 py-5 font-semibold text-black duration-200 hover:bg-[#FFCC00] dark:text-black"
						>
							<a href={page.path}>{page.name}</a>
						</li>
					{:else}
						<li
							class="px-3 py-5 font-medium text-black duration-200 hover:bg-[#FFCC00] dark:text-black"
						>
							<a href={page.path}>{page.name}</a>
						</li>
					{/if}
				{/key}
			{/each}
		</ul>
	</div>
</nav>
