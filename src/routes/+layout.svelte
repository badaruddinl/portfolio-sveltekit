<script lang="ts">
	import '$src/app.css';
	import DefaultLayout from '$lib/layout/DefaultLayout.svelte';
</script>

<DefaultLayout />
<main class="font-montserrat">
	<slot />
</main>
