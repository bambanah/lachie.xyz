import styled from "styled-components";

export const Container = styled.div<{ size: number }>`
	overflow: hidden;
	width: ${({ size }) => size}em;
	height: ${({ size }) => size}em;
	border-radius: 50%;
	background-color: ${({ theme }) => theme.colors.bg};
	/* transition: none; */

	div {
		width: ${({ size }) => size}em;
		height: ${({ size }) => size}em;
		border-radius: 50%;

		cursor: pointer;

		&.sun {
			background-color: #f7914d;
			border: 0.6em solid #f7b14d;
		}

		&.moon {
			background-color: white;
		}
	}
`;
