<script lang="ts">
	import NavItems from '../components/NavItems.svelte';

	const items = [
		{ label: 'Home', href: '/' },
		{ label: 'Project', href: '/project' }
	];
</script>

<NavItems {items} />
<slot />
