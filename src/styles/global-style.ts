import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
	html,
	body {
		margin: 0;

		color: ${({ theme }) => theme.colors.fg};
		background-color: ${({ theme }) => theme.colors.bg};

		font-family: "Roboto Slab", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell",
			"Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
	}

	* {
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		transition: color 1s, background-color 1s, text-shadow 1s;
	}

	*,
	*::before,
	*::after {
		box-sizing: border-box;
		position: relative;
		padding: 0;
		margin: 0;
		border: 0;
	}

	a {
		cursor: pointer;
		text-decoration: none;
		color: ${({ theme }) => theme.colors.link};
	}

	p {
		font-family: "Roboto Mono", sans-serif;
	}

	img {
		max-width: 100%;
		display: block;
	}

	svg {
		width: 0.7em;
		vertical-align: middle;
	}
`;

export default GlobalStyle;
