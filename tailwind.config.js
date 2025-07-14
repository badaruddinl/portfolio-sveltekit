/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'primary-yellow': '#FFCC00',
				'secondary-yellow': '#FFE066'
			},
			fontFamily: {
				montserrat: ['Montserrat', 'sans-serif']
			}
		}
	},
	plugins: []
};
