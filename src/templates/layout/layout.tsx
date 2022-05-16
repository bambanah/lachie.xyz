import Head from "next/head";
import React, { ReactNode } from "react";
import * as Styles from "./layout.styles";

interface Props {
	title?: string;
	children: ReactNode;
}

const BaseLayout: React.FC<Props> = ({ title, children }) => {
	return (
		<Styles.Container>
			<Head>
				<title>{`${title ? `${title} | ` : ""}Lachlan Underhill`}</title>
				<link rel="icon" href="/favicon.ico" />
				<meta name="description" content="Come check me out!" />
				<meta
					name="viewport"
					content="height=device-height, width=device-width, initial-scale=1, shrink-to-fit=no"
				/>
			</Head>

			<Styles.Section>{children}</Styles.Section>
		</Styles.Container>
	);
};

export default BaseLayout;
