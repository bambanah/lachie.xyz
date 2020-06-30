import Layout from "../../components/Layout";
import styles from "../../components/styles/projects.module.scss";

import { getAllProjectIds, getProjectData } from "../../lib/projects";

export default function Project({ projectData }) {
  return (
    <Layout title={projectData.title}>
      <article className={styles.content}>
        <h1 className="title">{projectData.title}</h1>
        <img src={projectData.hero_image} />
        <div dangerouslySetInnerHTML={{ __html: projectData.contentHtml }} />

        <style jsx>{`
          .title {
            font-size: 5rem;
            font-family: "Roboto Slab", serif;
          }
        `}</style>
      </article>
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

  return {
    props: {
      projectData,
    },
  };
}
