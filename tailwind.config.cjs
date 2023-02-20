/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				'personal-black': '#161B1F',
			},
			backgroundImage: {
        'test-img': "url('/img/blog/wxample.jpg')",
      }
		},
	},
	plugins: [],
}
