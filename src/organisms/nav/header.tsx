import Navbar from "./navbar/navbar";
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
			<Navbar />
		</header>
	);
}

export default Header;
