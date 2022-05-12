import Head from "next/head";
import React, { ReactNode } from "react";
import Footer from "../../organisms/nav/footer";
import Header from "../../organisms/nav/header";
import * as styles from "./layout.styles";

interface Props {
	title?: string;
	children: ReactNode;
}

const BaseLayout: React.FC<Props> = ({ title, children }) => {
	return (
		<styles.Container>
			<Head>
				<title>{`${title ? `${title} | ` : ""}Lachlan Underhill`}</title>
				<link rel="icon" href="/favicon.ico" />
				<meta name="description" content="Come check out my projects!" />
			</Head>

			<Header />

			<styles.Section>{children}</styles.Section>

			<Footer />
		</styles.Container>
	);
};

export default BaseLayout;
