import styled from "styled-components";

interface ContainerProps {
	imageName: string;
}

export const Hero = styled.div<ContainerProps>`
	background: linear-gradient(rgba(2, 2, 0, 0.2), rgba(2, 2, 0, 0.2)),
		url(${(props) => `/img/${props.imageName}`}) no-repeat center;
	background-size: 100vw;
	height: 20em;
`;
export const Content = styled.article`
	flex: 1 0 auto;
	width: 50rem;
	margin: auto;
	margin-top: 3rem;

	font-family: "Roboto Slab", serif;

	display: flex;
	flex-direction: column;
`;

export const LinkRow = styled.div`
	display: flex;
	justify-content: space-between;
	a {
		color: #fff;
		padding: 0 5px;
		border-radius: 2px;

		background-image: linear-gradient(120deg, #ffffff 0%, #ffffff 100%);
		background-repeat: no-repeat;
		background-size: 0% 0.1em;
		background-position: 0 60%;

		transition-duration: 0.1s;

		&:hover {
			background-size: 100% 0.1em;
			// color: #000;
		}
	}
`;

export const Title = styled.h1`
	flex: 0 1 auto;
	color: rgb(255, 255, 255);
	margin-bottom: 1.5rem;
	// margin: 0;
	// padding: 0;

	text-align: center;
	font-size: 4rem;

	background: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
	background-clip: text;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
`;

export const Markdown = styled.div`
	h1 {
		font-size: 3rem;
	}

	p {
		padding: 1.2em 0;
	}

	ul,
	ol {
		padding-left: 15px;
	}

	blockquote {
		padding: 1em;
		background-color: #242424;
		border-radius: 3px;
	}

	pre {
		background-color: #333;
		padding: 10px;
	}

	code {
		font-family: "Roboto Mono", monospace;
		font-size: 1em;
	}

	a {
		color: white;
		text-decoration: none;
		padding: 0 3px;

		background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
		background-repeat: no-repeat;
		background-size: 100% 0.1em;
		background-position: 0 100%;

		transition-duration: 0.1s;

		&:hover {
			background-size: 100% 90%;
			background-position: 0 100%;
			color: black;

			transition-duration: 0.1s;
		}
	}

	hr {
		border-bottom: 3px solid rgba(255, 255, 255, 0.7);
		margin: 1em 1em;
	}
`;
