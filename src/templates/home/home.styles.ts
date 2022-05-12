import styled from "styled-components";

export const Container = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	a {
		margin-top: 1rem;
		font-family: "Roboto Mono", sans-serif;

		&:hover {
			text-decoration: underline;
		}
	}
`;
