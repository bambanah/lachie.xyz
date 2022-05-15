import { DefaultTheme } from "styled-components";

export const light: DefaultTheme = {
	type: "light",
	colors: {
		fg: "#000000",
		bg: "#E4FFF7",
		brand: "#F7914D",
		accent: "#ce89ee",
		link: "#000",
		error: "#ff574e",
	},
};

export const dark: DefaultTheme = {
	type: "dark",
	colors: {
		fg: "#FEFBFD",
		bg: "#17171c",
		brand: "#FEFBFD",
		accent: "#8fd3f4",
		link: "#fff",
		error: "#ff6961",
	},
};
