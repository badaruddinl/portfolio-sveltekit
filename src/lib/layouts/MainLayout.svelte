<script lang="ts">
	import NavbarLayout from './NavbarLayout.svelte';
	import FooterLayout from './FooterLayout.svelte';
</script>

<NavbarLayout />
<div class="pt-20">
	<!-- offset for fixed navbar -->
	<slot />
</div>
<FooterLayout />
