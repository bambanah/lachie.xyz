import Link from "next/link";
import { useRouter } from "next/router";

import styles from "@styles/nav.module.scss";

export default function Nav() {
	const router = useRouter();

	return (
		<nav className={styles.navbar}>
			<ul>
				<li className={router.pathname == "/" ? "active" : ""}>
					<Link href="/">
						<a className={styles.nav_link}>home</a>
					</Link>
				</li>
				<li className={router.pathname.includes("/projects") ? "active" : ""}>
					<Link href="/projects">
						<a className={styles.nav_link}>projects</a>
					</Link>
				</li>
			</ul>

			<style jsx>{`
				.active {
					background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
					background-repeat: no-repeat;
					background-size: 100% 0.15em;
					background-position: 0 100%;
				}
			`}</style>
		</nav>
	);
}
