<script lang="ts">
	export let rounded: boolean = false;
	export let text: string = "Hi There I'm";
</script>

<div class="flex flex-col-reverse justify-center">
	<div class="flex items-end justify-center w-full h-2 overflow-hidden duration-300">
		<div
			class={`bg-[#FFE066] mb-0.5 h-3 w-3 rotate-45 ${
				rounded ? 'rounded-br-md' : 'rounded-br-none'
			}`}
		></div>
	</div>
	<div
		class={`bg-[#FFE066] w-full justify-center px-5 py-1 text-center duration-300 ${
			rounded ? 'rounded-xl' : 'rounded-none'
		}`}
	>
		<div>{text}</div>
	</div>
</div>
