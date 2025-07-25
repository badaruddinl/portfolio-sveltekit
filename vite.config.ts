import tailwindcss from '@tailwindcss/vite';
import devtoolsJson from 'vite-plugin-devtools-json';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
	plugins: [tailwindcss(), sveltekit(), devtoolsJson()],
	resolve: {
		alias: {
			$src: path.resolve('./src'),
			$lib: path.resolve('./src/lib')
		}
	}
});
