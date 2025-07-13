<script lang="ts">
	import '$src/app.css';
	import DashboardLayout from '$lib/layout/DashboardLayout.svelte';
</script>

<main class="font-montserrat">
	<DashboardLayout>
		<slot />
	</DashboardLayout>
</main>
