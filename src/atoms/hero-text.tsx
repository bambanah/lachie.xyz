import React from "react";
import styled from "styled-components";

const Styled = styled.h1`
	margin: 0;
	color: white;
	font-family: "Righteous", serif;
	font-size: 12em;
	font-weight: 400;
	text-shadow: 0.03em 0.03em 0 #17171c;
	z-index: 100;
	user-select: none;

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

		/* This is extremely messy to look at, but does actually make sense */
		background-image: linear-gradient(
			45deg,
			#8fd3f4 3.2%,
			transparent 3.2%,
			transparent 45%,
			#8fd3f4 45%,
			#8fd3f4 55%,
			transparent 55%,
			transparent 96.8%,
			#8fd3f4 96.8%
		);
		background-size: 0.05em 0.05em;
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;

		animation: shad-anim 20s linear infinite;

		@keyframes shad-anim {
			0% {
				background-position: 0 0;
			}
			0% {
				background-position: 100% -100%;
			}
		}
	}
`;

interface Props {
	text: string;
}

const HeroText: React.FC<Props> = ({ text: label }) => {
	return <Styled data-shadow={label}>{label}</Styled>;
};

export default HeroText;
