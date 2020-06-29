import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import styles from "../../components/styles/projects.module.scss";

import Markdown from "../../markdown/Content.mdx";

const Project = () => {
  const router = useRouter();

  const { projectid } = router.query;

  return (
    <Layout>
      <div className={styles.content}>
        <Markdown />
      </div>
    </Layout>
  );
};

export default Project;
