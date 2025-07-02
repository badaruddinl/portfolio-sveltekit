<script lang="ts">
	import '$src/app.css';
	import { page } from '$app/state';
	import DefaultLayout from '$lib/layout/DefaultLayout.svelte';
	const hiddenNavbarPatterns = [/^\/auth(\/.*)?$/, /^\/dashboard$/];
	$: currentPath = page.url.pathname;
	$: hideNavbar = hiddenNavbarPatterns.some((pattern) => pattern.test(currentPath));
</script>

{#if !hideNavbar}
	<DefaultLayout />
{/if}

<main class="font-montserrat">
	<slot />
</main>
