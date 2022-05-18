import React, { ReactNode } from "react";
import * as Styles from "./layout.styles";

interface Props {
	children: ReactNode;
}

const BaseLayout: React.FC<Props> = ({ children }) => {
	return (
		<Styles.Container>
			<Styles.Section>{children}</Styles.Section>
		</Styles.Container>
	);
};

export default BaseLayout;
