/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/app/**/*.{js,ts,jsx,tsx,mdx}', './src/layout/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {
			fontFamily: {
				fjalla: ['Fjalla One', 'sans-serif'],
				'work-sans': ['Work Sans', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
