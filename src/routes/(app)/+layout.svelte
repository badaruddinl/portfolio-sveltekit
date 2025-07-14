<script lang="ts">
	import DefaultLayout from '$lib/layouts/DefaultLayout.svelte';
	import MainLayout from '$lib/layouts/MainLayout.svelte';
</script>

<main class="font-montserrat">
	<MainLayout>
		<slot />
	</MainLayout>
</main>
