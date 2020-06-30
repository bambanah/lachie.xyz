import Layout from "../../components/Layout";
import styles from "../../components/styles/projects.module.scss";

import { getAllProjectIds, getProjectData } from "../../lib/projects";

export default function Project({ projectData }) {
  return (
    <Layout title={projectData.title}>
      <div className={styles.content}>
        <h1>{projectData.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: projectData.contentHtml }} />
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  // Return a list of possible values for id
  const paths = getAllProjectIds();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // Fetch necessary data using params.id
  const projectData = await getProjectData(params.id);
  console.log(projectData.contentHtml);
  return {
    props: {
      projectData,
    },
  };
}
