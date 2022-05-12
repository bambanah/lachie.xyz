import HeroText from "@atoms/hero-text";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
import * as Styles from "./home.styles";

const Home = () => {
	return (
		<Styles.Container>
			<HeroText text="hello!" />

			<Link href="/projects">
				<a>
					Check out my projects <FontAwesomeIcon icon={faArrowRight} />
				</a>
			</Link>
		</Styles.Container>
	);
};

export default Home;
