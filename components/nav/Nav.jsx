import Link from "next/link";
import { useRouter } from "next/router";

import styles from "../styles/nav.module.scss";

export default function Nav() {
  const router = useRouter();

  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <Link href="/">
            <a
              className={`${styles.navlink} ${
                router.pathname == "/" ? "active" : ""
              }`}
            >
              home
            </a>
          </Link>
        </li>
        <li>
          <Link href="/projects">
            <a
              className={`${styles.navlink} ${
                router.pathname.includes("/projects") ? "active" : ""
              }`}
            >
              projects
            </a>
          </Link>
        </li>
        <li>
          <Link href="/playground">
            <a
              className={`
              ${styles.navlink} ${
                router.pathname.includes("/playground") ? "active" : ""
              }
              `}
            >
              playground
            </a>
          </Link>
        </li>
      </ul>

      <style jsx>{`
        .active {
          background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
          background-repeat: no-repeat;
          background-size: 100% 0.1em;
          background-position: 0 100%;
        }
      `}</style>
    </nav>
  );
}
