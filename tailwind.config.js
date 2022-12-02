/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			screens: {
				"3xl": "2000px",
			},
			blur: {
				0.5: "1px",
			},
			colors: {
				headerGreen: "green",
			},
			backgroundImage: {
				bgImg: "url(../public/assets/bgImg.jpg)",
			},
		},
	},
	plugins: [],
};
