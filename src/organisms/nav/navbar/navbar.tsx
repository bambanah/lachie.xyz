import ThemeSwitch from "@atoms/theme-switch";
import Link from "next/link";
import { useRouter } from "next/router";
import * as Styles from "./navbar.styles";

export default function Navbar() {
	const router = useRouter();

	return (
		<Styles.Navbar>
			<Styles.NavItem className={router.pathname == "/" ? "active" : ""}>
				<Link href="/">
					<Styles.NavLink>home</Styles.NavLink>
				</Link>
			</Styles.NavItem>
			<Styles.NavItem
				className={router.pathname.includes("/projects") ? "active" : ""}
			>
				<Link href="/projects">
					<Styles.NavLink>projects</Styles.NavLink>
				</Link>
			</Styles.NavItem>
			<Styles.NavItem>
				<ThemeSwitch />
			</Styles.NavItem>
		</Styles.Navbar>
	);
}
