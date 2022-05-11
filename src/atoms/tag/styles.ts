import styled from "styled-components";

interface TagProps {
	bg: string;
	fg: string;
}
export const StyledTag = styled.li<TagProps>`
	background-color: ${(props) => props.bg};
	color: ${(props) => props.fg};

	font-family: "Recursive";
	font-size: 0.9em;
	display: inline-block;
	padding: 2px 4px;
	border-radius: 2px;
	margin-right: 5px;

	p {
		line-height: 1em;
	}
`;
