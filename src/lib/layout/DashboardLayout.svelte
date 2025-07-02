<script lang="ts">
	import Sidebar from '$lib/components/Sidebar.svelte';
	import type { SidebarItem } from '$lib/components/Sidebar.svelte';

	const items: SidebarItem[] = [
		{ label: 'Home', href: '/' },
		{ label: 'Project', href: '/project' },
		{
			label: 'User management',
			child: [
				{ label: 'Menu', href: '/user-management/menu' },
				{
					label: 'Users',
					child: [{ label: 'Role', href: '/user-management/users/role' }]
				}
			]
		}
	];
</script>

<Sidebar itemsSidebar={items}>
	<slot />
</Sidebar>
