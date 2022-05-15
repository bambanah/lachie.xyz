import styled from "styled-components";

export const Container = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 2rem;
	padding-bottom: 5rem;
`;

export const About = styled.div`
	max-width: 38rem;
	display: flex;
	gap: 2rem;
	flex-direction: column;

	p {
		font-size: 1.4em;
		color: ${({ theme }) => theme.colors.fg};
		opacity: 0.9;

		text-align: left;
	}

	a {
		font-family: "Roboto Mono", sans-serif;
		text-decoration: underline;

		&:hover {
			color: ${({ theme }) => theme.colors.brand};
			text-shadow: 0px 0px 1px ${({ theme }) => theme.colors.brand};
			text-decoration: underline;
		}
	}

	.links {
		margin-top: 2rem;
		align-self: center;
		display: flex;
		align-items: center;
		gap: 1.8rem;

		a {
			color: ${({ theme }) => theme.colors.fg}bb;

			&:hover {
				color: ${({ theme }) => theme.colors.fg};
			}
		}

		svg {
			font-size: 2.8rem;
		}
	}
`;
