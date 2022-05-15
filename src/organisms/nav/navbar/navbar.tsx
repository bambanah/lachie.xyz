import ThemeSwitch from "@atoms/theme-switch";
import * as Styles from "./navbar.styles";

export default function Navbar() {
	return (
		<Styles.Navbar>
			<Styles.NavItem>
				<ThemeSwitch scale={0.9} />
			</Styles.NavItem>
		</Styles.Navbar>
	);
}
