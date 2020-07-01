import Layout from "../../components/Layout";
import styles from "../../components/styles/projects.module.scss";

import ReactMarkdown from "react-markdown";
import Link from "next/link";

import { getMarkdownReadme, getProject } from "../../lib/projects";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function Project({ display, image_name, readmeContent }) {
  return (
    <Layout title={display}>
      <div
        className={styles.hero}
        style={{
          background: `
          linear-gradient(rgba(2, 2, 0, 0.2),
          rgba(2, 2, 0, 0.2)),
          url(${"/img/" + image_name}) no-repeat center
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
        <ReactMarkdown source={readmeContent} />

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

export async function getServerSideProps({ params }) {
  // Fetch necessary data using params.id
  const projectInfo = getProject(params.id);
  console.log(projectInfo);

  const readmeContent = await getMarkdownReadme(projectInfo.repo_url);

  return {
    props: {
      ...projectInfo,
      ...readmeContent,
    },
  };
}
