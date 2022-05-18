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
			<Styles.Section>{children}</Styles.Section>
		</Styles.Container>
	);
};

export default BaseLayout;
