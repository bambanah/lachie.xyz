import { useTheme } from "@context/app-context";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
	position: relative;

	> div {
		position: absolute;
		top: 3.8em;
		right: 3.5em;

		z-index: 100;
	}
`;

const Styled = styled.h1`
	padding: 0;
	margin: 0;
	margin-bottom: 4rem;

	line-height: 100%;

	cursor: pointer;
	overflow: hidden;
	user-select: none;

	color: ${({ theme }) => theme.colors.brand};
	font-family: "Righteous", serif;
	font-size: 12em;
	font-weight: 400;

	text-shadow: 0.02em 0.02em 0 ${({ theme }) => theme.colors.bg};

	z-index: 100;

	.hidden {
		opacity: 0;
		text-shadow: none;
	}

	@media (max-width: 650px) {
		font-size: 29.5vw;
	}

	&:after {
		content: attr(data-shadow);
		position: absolute;
		top: 0.06em;
		left: 0.05em;
		z-index: -1;
		text-shadow: none;

		background: repeating-linear-gradient(
			45deg,
			${({ theme }) => theme.colors.accent},
			${({ theme }) => theme.colors.accent} 2px,
			rgba(255, 255, 255, 0) 2px,
			rgba(255, 255, 255, 0) 8px
		);

		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;

		animation: shad-anim 0.3s linear infinite;

		@keyframes shad-anim {
			0% {
				background-position-y: 0;
			}

			100% {
				background-position-y: 11.315px;
			}
		}
	}
`;

const HeroText: React.FC = () => {
	const [theme, setTheme] = useTheme();

	return (
		<Container>
			<Styled
				data-shadow="hello!"
				onClick={() => setTheme(theme === "light" ? "dark" : "light")}
			>
				hello!
			</Styled>
		</Container>
	);
};

export default HeroText;
