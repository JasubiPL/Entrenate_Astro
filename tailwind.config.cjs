/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				'personal-black': '#122c5c',
				'secundari':'#00bb2d',
			},
			backgroundImage: {
        'test-img': "url('/img/blog/wxample.jpg')",
				'submenu':"url('/img/background-submenu.svg')"
      },
			screens:{
				'tb':'600px'
			},
		},
	},
	plugins: [],
}
