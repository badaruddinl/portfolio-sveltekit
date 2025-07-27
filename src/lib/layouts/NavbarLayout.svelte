<script lang="ts">
	import { page } from '$app/stores';
	import { derived } from 'svelte/store';
	import { goto } from '$app/navigation';

	const pages = [
		{
			path: '/',
			name: 'Badarudd.in'
		}
		// Future links can be added here
	];

	const currentPath = derived(page, ($page) => $page.url.pathname);
	console.log(currentPath);

	function handleClick(path: string) {
		goto(path);
	}

	function handleKeydown(event: KeyboardEvent, path: string) {
		if (event.key === 'Enter' || event.key === ' ') {
			event.preventDefault();
			goto(path);
		}
	}
</script>

<!-- Desktop navbar (top) -->
<nav class="fixed top-0 z-50 hidden w-full bg-[#fbda2b] md:block">
	<div class="flex items-center">
		<!-- Logo container with fixed width -->
		<div class="flex-shrink-0 bg-[#FFCC00] px-5 py-5">
			<a href="/" class="flex items-center">
				<img class="w-5" src="/logo/Logo.svg" alt="logo" />
			</a>
		</div>
		<!-- Menu container -->
		<div class="flex-1 overflow-hidden">
			<div class="flex flex-row justify-end text-sm">
				{#each pages as page}
					{#key page.path}
						{#if $currentPath === page.path}
							<div
								onclick={() => handleClick(page.path)}
								onkeydown={(e) => handleKeydown(e, page.path)}
								role="button"
								tabindex="0"
								class="cursor-pointer bg-[#FFCC00] px-3 py-5 font-semibold text-black duration-200 dark:text-black"
							>
								{page.name}
							</div>
						{:else}
							<div
								onclick={() => handleClick(page.path)}
								onkeydown={(e) => handleKeydown(e, page.path)}
								role="button"
								tabindex="0"
								class="cursor-pointer px-3 py-5 font-medium text-black duration-200 hover:bg-[#FFCC00] dark:text-black"
							>
								{page.name}
							</div>
						{/if}
					{/key}
				{/each}
			</div>
		</div>
	</div>
</nav>

<!-- Mobile bottom bar -->
<div class="fixed right-0 bottom-0 left-0 z-50 mb-12 md:hidden">
	<div class="mx-6 overflow-x-hidden rounded-full border-t border-gray-200 bg-[#fbda2b] shadow-lg">
		<div class="flex items-center">
			<!-- Logo container with fixed width -->
			<div class=" mr-1 flex-shrink-0">
				<div class="flex h-10 w-10 items-center justify-center rounded-full bg-[#FFCC00]">
					<a href="/" class="flex items-center justify-center">
						<img class="h-6 w-6" src="/logo/Logo.svg" alt="logo" />
					</a>
				</div>
			</div>
			<!-- Scrollable menu container -->
			<div class="flex-1 overflow-hidden rounded-l-full">
				<div class="scrollbar-hide flex flex-row space-x-1 overflow-x-auto text-sm">
					{#each pages as page}
						{#key page.path}
							<div
								onclick={() => handleClick(page.path)}
								onkeydown={(e) => handleKeydown(e, page.path)}
								role="button"
								tabindex="0"
								class="flex cursor-pointer flex-col items-center rounded-full"
							>
								{#if $currentPath === page.path}
									<span class="rounded-full bg-[#FFCC00] px-3 py-3 text-xs font-semibold text-black"
										>{page.name}</span
									>
								{:else}
									<span class="py-3 pr-3 pl-2 text-xs font-medium text-black">{page.name}</span>
								{/if}
							</div>
						{/key}
					{/each}
				</div>
			</div>
		</div>
	</div>
</div>

<!-- Add padding to body for mobile bottom bar -->
<style>
	@media (max-width: 768px) {
		:global(body) {
			padding-bottom: 80px;
		}
	}

	/* Hide scrollbar for Chrome, Safari and Opera */
	.scrollbar-hide::-webkit-scrollbar {
		display: none;
	}

	/* Hide scrollbar for IE, Edge and Firefox */
	.scrollbar-hide {
		-ms-overflow-style: none; /* IE and Edge */
		scrollbar-width: none; /* Firefox */
	}
</style>
