import Head from "next/head";

import Header from "./nav/Header";
import Footer from "./nav/Footer";

import styles from "./styles/layout.module.scss";

function Layout(props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>
          {(props.title !== undefined &&
            props.title + " | Lachlan Underhill") ||
            "Lachlan Underhill"}
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <section className={styles.section}>{props.children}</section>
      <Footer />
    </div>
  );
}

export default Layout;
