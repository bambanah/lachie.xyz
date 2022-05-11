import styles from "@styles/nav.module.scss";
import styled from "styled-components";

const StyledFooter = styled.footer`
	font-family: "Fira Code", monospace;
	text-align: left;
	width: 100%;
	padding: 0 5%;
	padding-top: 1rem;
	padding-bottom: 2rem;

	font-size: 0.8rem;

	ul {
		margin: 0;
		padding: 0;
		list-style: none;

		li {
			margin-right: 2em;
			float: left;
		}
	}

	a {
		color: rgb(199, 199, 199);

		&:hover {
			color: white;
		}
	}

	@media (min-width: 1200px) {
		width: calc(1200px - 120px);
		margin: auto;
		padding-left: 0;
		padding-right: 0;
	}
`;

export default function Footer() {
	return (
		<StyledFooter className={styles.footer}>
			<ul>
				<li>
					<a href="https://github.com/Bambanah">GitHub</a>
				</li>
				<li>
					<a href="https://linkedin.com/in/lachlan-underhill-7476681a0/">
						LinkedIn
					</a>
				</li>
				<li>
					<a href="https://www.hackerrank.com/Bambanah">HackerRank</a>
				</li>
			</ul>
		</StyledFooter>
	);
}
