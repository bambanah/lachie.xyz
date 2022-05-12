import styled from "styled-components";

export const Navbar = styled.nav`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	gap: 1em;

	flex: 1 1 auto;
	text-align: right;

	flex-wrap: nowrap;
`;

export const NavLink = styled.a`
	background-image: linear-gradient(
		120deg,
		${({ theme }) => theme.colors.fg} 0%,
		${({ theme }) => theme.colors.fg} 100%
	);
	background-repeat: no-repeat;
	background-size: 0% 0.1em;
	background-position: 0 60%;

	padding: 0 2px;

	transition: background-size 0.1s ease;

	&:hover {
		background-size: 100% 0.1em;
	}
`;

export const NavItem = styled.div`
	&.active {
		background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
		background-repeat: no-repeat;
		background-size: 100% 0.15em;
		background-position: 0 100%;
	}
`;
