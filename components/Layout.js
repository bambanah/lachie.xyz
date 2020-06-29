import Head from "next/head";

import Header from "./nav/Header";
import Footer from "./nav/Footer";

import styles from "./styles/layout.module.scss";

function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Lachlan Underhill</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
