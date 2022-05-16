import styled from "styled-components";

export const Container = styled.div<{ size: number }>`
	position: fixed;
	bottom: -${({ size }) => size / 1.5}em;

	width: ${({ size }) => size}em;
	height: ${({ size }) => size}em;

	div {
		width: ${({ size }) => size}em;
		height: ${({ size }) => size}em;
		border-radius: 50%;
		position: fixed;

		cursor: pointer;

		&.sun {
			left: 5em;

			background-color: #f7914d;
			border: 1em solid #f7b14d;

			box-shadow: 0px 0px 30px #f7914d;
		}

		&.moon {
			right: 5em;

			background-color: #f1f1f1;
			border: 0.4em solid #fff;

			box-shadow: 0px 0px 20px #fff;
		}
	}

	@media screen and (max-width: 700px) {
		--new-size: ${({ size }) => size / 4}em;

		width: var(--new-size);
		height: var(--new-size);

		bottom: -var(--new-size);

		div {
			width: var(--new-size);
			height: var(--new-size);

			margin: auto;
			top: calc(var(--new-size) / -2);

			&.sun {
				left: calc(var(--new-size) / -2);
				border-width: 0.4em;
			}

			&.moon {
				right: calc(var(--new-size) / -2);
			}
		}
	}
`;
