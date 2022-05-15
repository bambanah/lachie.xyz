import HeroText from "@atoms/hero-text";
import React from "react";
import * as Styles from "./home.styles";

const Home = () => {
	return (
		<Styles.Container>
			<HeroText text="hello!" />
		</Styles.Container>
	);
};

export default Home;
