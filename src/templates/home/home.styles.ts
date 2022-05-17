import styled from "styled-components";

export const Container = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const About = styled.div`
	max-width: 35rem;
	display: flex;
	gap: 2rem;
	flex-direction: column;
	font-family: "Roboto Mono", sans-serif;

	p {
		font-size: 1.2em;
		color: ${({ theme }) => theme.colors.fg};
		opacity: 0.9;

		text-align: left;

		a {
			text-decoration: underline;
		}
	}

	.links {
		margin-top: 2rem;
		align-self: center;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
		gap: 1.8rem;

		p {
			text-align: center;
			flex: 1 0 auto;
			width: 100%;
		}

		svg {
			font-size: 2.8rem;

			path {
				color: ${({ theme }) => theme.colors.fg}dd;
			}
		}
	}
`;
