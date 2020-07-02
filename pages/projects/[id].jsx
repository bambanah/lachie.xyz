import Layout from "../../components/Layout";
import styles from "../../components/styles/projects.module.scss";

import ReactMarkdown from "react-markdown";
import Link from "next/link";
import useSWR from "swr";

import {
  getMarkdownReadme,
  getProject,
  getAllProjectIds,
} from "../../lib/projects";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function Project({ projectId }) {
  const projectInfo = getProject(projectId);
  const { data, error } = useSWR(projectInfo.repo_url, getMarkdownReadme);

  return (
    <Layout title={projectInfo.display}>
      <div
        className={styles.hero}
        style={{
          background: `
          linear-gradient(rgba(2, 2, 0, 0.2),
          rgba(2, 2, 0, 0.2)),
          url(${"/img/" + projectInfo.image_name}) no-repeat center
          `,
          backgroundSize: `100vw`,
        }}
      ></div>

      <article className={styles.content}>
        <Link href="/projects">
          <a className={styles.back_link}>
            <FontAwesomeIcon icon={faArrowLeft} /> back to projects
          </a>
        </Link>

        <br />

        {data && <ReactMarkdown source={data.readmeContent} />}

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

export async function getStaticProps({ params }) {
  return {
    props: {
      projectId: params.id,
    },
  };
}

export async function getStaticPaths() {
  const projectIds = getAllProjectIds();
  const paths = projectIds.map((id) => {
    return {
      params: { id: id },
    };
  });

  return {
    paths: paths,
    fallback: false,
  };
}
