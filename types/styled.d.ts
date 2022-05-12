import "styled-components";

declare module "styled-components" {
	export interface DefaultTheme {
		type: "light" | "dark";

		colors: {
			fg: string;
			bg: string;
			brand: string;
			accent: string;
			link: string;
			error: string;
		};
	}
}
