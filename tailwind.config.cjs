const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,md,mdx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				heading: ["Patua One", ...defaultTheme.fontFamily.serif],
				sans: ["InterVariable", "Inter", ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [],
};
