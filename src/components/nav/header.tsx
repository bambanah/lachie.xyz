import Nav from "./nav";
import Link from "next/link";

import styles from "@styles/nav.module.scss";

function Header() {
	return (
		<header className={styles.header}>
			<div className={styles.brand}>
				<Link href="/">
					<a>LACHLAN UNDERHILL</a>
				</Link>
			</div>
			<Nav />
		</header>
	);
}

export default Header;
