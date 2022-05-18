import styled from "styled-components";

export const Container = styled.div`
	box-sizing: border-box;
	min-height: 100vh;
	height: 100%;
	display: flex;

	flex-direction: column;
	justify-content: center;
	overflow-x: hidden;
`;

export const Section = styled.section`
	flex: 1 0 auto;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 2em;
	padding-bottom: 5em;
`;
