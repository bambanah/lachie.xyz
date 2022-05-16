import {
	faGithub,
	faHackerrank,
	faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeroText from "@molecules/hero-text";
import ThemeSwitch from "@molecules/theme-switch";
import React from "react";
import * as Styles from "./home.styles";

const Home = () => {
	return (
		<Styles.Container>
			<HeroText />
			<Styles.About>
				<p>I&#39;m Lachie.</p>
				<p>
					Currently, I&#39;m living my best life as a Software Engineer for{" "}
					<a href="https://www.amazon.com/alm/storefront?almBrandId=QW1hem9uIEZyZXNo">
						Amazon Fresh
					</a>
					.
				</p>

				<p>
					I&#39;ve previously worked for{" "}
					<a href="https://technologyonecorp.com/">TechnologyOne</a> and{" "}
					<a href="https://workingmouse.com.au/">WorkingMouse</a>, and loved
					every second of it.
				</p>

				<div className="links">
					<p>You can check me out here!</p>
					<a href="https://github.com/Bambanah" aria-label="GitHub">
						<FontAwesomeIcon icon={faGithub} />
					</a>
					<a
						href="https://linkedin.com/in/lachlan-underhill-7476681a0/"
						aria-label="LinkedIn"
					>
						<FontAwesomeIcon icon={faLinkedin} />
					</a>
					<a href="https://www.hackerrank.com/Bambanah" aria-label="HackerRank">
						<FontAwesomeIcon icon={faHackerrank} />
					</a>
				</div>
			</Styles.About>

			<ThemeSwitch />
		</Styles.Container>
	);
};

export default Home;
