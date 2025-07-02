<script lang="ts">
	import '$src/app.css';
	import { page } from '$app/stores';
	import DefaultLayout from '$lib/layout/DefaultLayout.svelte';
	const hiddenNavbarPatterns = [/^\/auth(\/.*)?$/, /^\/dashboard$/];
	$: hideNavbar = hiddenNavbarPatterns.some((pattern) => pattern.test($page.url.pathname));
</script>

{#if !hideNavbar}
	<DefaultLayout />
{/if}

<main class="font-montserrat">
	<slot />
</main>
