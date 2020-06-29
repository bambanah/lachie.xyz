import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import Layout from "../components/Layout";

import styles from "../components/styles/home.module.scss";

export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
        <h1 className={styles.hero_text} data-shadow="hello!">
          hello!
        </h1>
        <Link href="/projects">
          <a>
            Check out my projects{" "}
            <FontAwesomeIcon icon={faArrowRight} className={styles.icon} />
          </a>
        </Link>
      </div>
    </Layout>
  );
}
