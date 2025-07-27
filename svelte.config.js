import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
	preprocess: vitePreprocess({
		postcss: true
	}),
	kit: {
		adapter: adapter({
			out: 'build'
		})
	}
};
export default config;
