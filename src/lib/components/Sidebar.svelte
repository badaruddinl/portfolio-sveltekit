<script context="module" lang="ts">
	// Export agar bisa di-import dari luar
	export type SidebarItem = {
		label: string;
		href?: string;
		child?: SidebarItem[];
	};
</script>

<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	export let itemsSidebar: SidebarItem[] = [];

	const isActive = (href: string | undefined) => href && $page.url.pathname === href;
</script>

<div class="flex w-full flex-row">
	<nav class="h-lvh w-4/12 max-w-sm min-w-[200px] bg-amber-300">
		<div class="flex flex-col items-center">
			<!-- Go to first item if it has an href -->
			{#if itemsSidebar.length && itemsSidebar[0].href}
				<button
					onclick={() => itemsSidebar[0].href && goto(itemsSidebar[0].href)}
					class="py-3 hover:cursor-pointer"
				>
					<img src="/logo/Logo.svg" alt="Logo" class="h-7" />
				</button>
			{/if}

			<ul class="flex w-full flex-col">
				{#each itemsSidebar as item}
					{#if item.href}
						<li>
							<button
								onclick={() => item.href && goto(item.href)}
								class="w-full cursor-pointer px-4 py-4 text-left text-sm transition-all delay-100 duration-300 hover:bg-yellow-500"
								class:bg-yellow-500={isActive(item.href)}
							>
								<span class="font-semibold">{item.label}</span>
							</button>
						</li>
					{:else}
						<li class="px-4 py-2 font-bold">{item.label}</li>
					{/if}

					{#if item.child}
						<ul class="ml-4 border-l border-yellow-500">
							{#each item.child as child}
								<!-- Recursive rendering, simple 1-level only here -->
								<li>
									<button
										onclick={() => child.href && goto(child.href)}
										class="w-full cursor-pointer px-4 py-2 text-left text-sm transition hover:bg-yellow-400"
										class:bg-yellow-500={isActive(child.href)}
									>
										<span class="font-medium">{child.label}</span>
									</button>
								</li>
							{/each}
						</ul>
					{/if}
				{/each}
			</ul>
		</div>
	</nav>

	<div class="w-full p-4">
		<slot />
	</div>
</div>
