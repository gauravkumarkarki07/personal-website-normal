/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily:{
				opensans:['Open Sans','sans-serif'],
			},
			colors:{
				textBlack:"#353935",
				textTeal:"#008000",
				background:'#EEEEEE'
			}
		},
	},
	plugins: [],
}
