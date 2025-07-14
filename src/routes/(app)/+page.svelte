<!-- <div class="flex justify-center">
	<div
		class="px-4 py-2 text-white transition-all duration-300 delay-200 bg-blue-400 rounded-sm cursor-pointer hover: w-fit hover:bg-yellow-200 hover:text-black hover:shadow-lg"
	>
		Hello
	</div>
</div> -->

<script>
	import MainLayout from '$lib/layouts/MainLayout.svelte';
	import Tooltip from '$lib/components/TheTooltip.svelte';
	import { onMount } from 'svelte';

	let nameToolTip = false;
	let underline = true;

	onMount(() => {
		document.title = "Hi There I'm Badaruddin";
	});
</script>

<MainLayout>
	<div class="flex h-screen w-full items-center justify-center">
		<div
			class="flex w-full flex-col-reverse gap-6 space-x-0 px-4 md:flex-row-reverse md:gap-4 md:space-x-10 md:px-0"
		>
			<div
				class="mt-5 flex w-full items-center justify-center text-center md:mt-0 md:w-2/3 md:justify-center md:text-left"
			>
				<div class="w-full md:w-1/2">
					<div class="relative mb-2">
						<!-- svelte-ignore a11y_no_static_element_interactions -->
						<span
							class="cursor-default text-4xl font-bold"
							class:underline
							class:no-underline={!underline}
							on:mouseenter={() => {
								nameToolTip = true;
								underline = false;
							}}
							on:mouseleave={() => {
								nameToolTip = false;
								underline = true;
							}}
						>
							{#if nameToolTip}
								<span class="text-base font-normal">
									<div class="absolute top-0 -mt-10 -ml-10 inline-flex">
										<Tooltip rounded={true} />
									</div>
								</span>
							{/if}
							Badarudd
						</span>
						<!-- svelte-ignore a11y_no_static_element_interactions -->
						<span
							class="cursor-default bg-[#FFCC00] px-1 py-0 text-4xl font-bold"
							on:mouseenter={() => {
								nameToolTip = true;
								underline = false;
							}}
							on:mouseleave={() => {
								nameToolTip = false;
								underline = true;
							}}
						>
							in Luthfi
						</span>
					</div>

					<div>
						<p class="mb-2">Web | Logo | Branding</p>
						<p>
							A Software Engineer with passion for graphic design with logo design skills and some
							branding experience
						</p>
					</div>
				</div>
			</div>

			<div class="mb-5 flex w-full items-center justify-center md:mb-0 md:w-1/3 md:justify-end">
				<div class="w-full md:w-1/2">
					<div class="mx-auto flex min-h-fit w-full items-center justify-center md:ml-0 md:w-1/2">
						<div class="max-h-[400px] max-w-[400px] md:max-h-[300px] md:max-w-[300px]">
							<div
								class="relative ml-0 h-[300px] w-[300px] rounded-full bg-[#FFCC00] md:ml-10 md:h-[300px] md:w-[300px]"
							>
								<div
									class="absolute right-0 -mr-4 h-[120px] w-[120px] rounded-full bg-[#FFE066] opacity-50 md:mr-0 md:h-[150px] md:w-[150px]"
								></div>
								<div
									class="absolute right-0 -z-10 -mr-4 h-[120px] w-[120px] rounded-full bg-[#FFE066] md:mr-0 md:h-[150px] md:w-[150px]"
								></div>
								<img class="ml-0 object-cover md:-ml-10" src="/assets/transperant.svg" alt="" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</MainLayout>
