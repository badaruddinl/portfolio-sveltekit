<script lang="ts">
	export let className: string = '';
	const year = new Date().getFullYear();
</script>

<div class={`${className} fixed bottom-0 w-full bg-white py-3`}>
	<div class="flex items-center justify-center text-center text-sm font-light">
		<span>&copy; {year} Badaruddin Luthfi. All Rights Reserved.</span>
	</div>
</div>
