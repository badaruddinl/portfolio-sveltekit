<script lang="ts">
	import '$src/app.css';
	import DashboardLayout from '$lib/layouts/DashboardLayout.svelte';
</script>

<main class="font-montserrat">
	<DashboardLayout>
		<slot />
	</DashboardLayout>
</main>
