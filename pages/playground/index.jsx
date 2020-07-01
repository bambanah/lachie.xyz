import Layout from "../../components/Layout";
import styles from "../../components/styles/playground.module.scss";

function Playground() {
  return (
    <Layout>
      <section className={styles.container}>
        <h1 className={styles.title}>
          This is the future home of any random fun things I feel like making.
        </h1>
      </section>
    </Layout>
  );
}

export default Playground;
