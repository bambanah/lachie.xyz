import Head from "next/head";

import Header from "./nav/header";
import Footer from "./nav/footer";

import styles from "@styles/layout.module.scss";
import React, { ReactNode } from "react";

interface Props {
	title?: string;
	children: ReactNode;
}

const Layout: React.FC<Props> = ({ title, children }) => {
	return (
		<div className={styles.container}>
			<Head>
				<title>
					{(title !== undefined && title + " | Lachlan Underhill") ||
						"Lachlan Underhill"}
				</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header />
			<section className={styles.section}>{children}</section>
			<Footer />
		</div>
	);
};

export default Layout;
