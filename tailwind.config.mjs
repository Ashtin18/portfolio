/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		fontFamily:{
			heartquake: ['Heartquake'],
			cooperBlack: ['CooperBlack'],
			caviarDreams: ['CaviarDreams']
		},
		colors:{
			mainBlack : "#0D0D0D",
			mainYellow: '#F2CA50',
			mainWhite: '#D9D9D9'
		}
		},
	plugins: [],
}
