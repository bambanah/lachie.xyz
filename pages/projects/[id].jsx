import Layout from "../../components/Layout";
import styles from "../../components/styles/projects.module.scss";

import ReactMarkdown from "react-markdown";
import Link from "next/link";

import { getAllProjectIds, getMarkdown } from "../../lib/projects";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Project({ frontmatter, markdownBody }) {
  return (
    <Layout title={frontmatter.title}>
      <div
        className={styles.hero}
        style={{
          background: `
          linear-gradient(rgba(2, 2, 0, 0.2),
          rgba(2, 2, 0, 0.2)),
          url(${"/img/" + frontmatter.image_name}) no-repeat center
          `,
          backgroundSize: `100vw`,
        }}
      ></div>

      <article className={styles.content}>
        <div className={styles.link_row}>
          <Link href="/projects">
            <a>
              <FontAwesomeIcon icon={faArrowLeft} /> back to projects
            </a>
          </Link>
          <a href={frontmatter.repo_url}>
            <FontAwesomeIcon icon={faGithub} /> GitHub
          </a>
        </div>

        <h1 className={styles.title}>{frontmatter.title}</h1>

        <div className={styles.markdown}>
          {markdownBody && <ReactMarkdown source={markdownBody} />}
        </div>
      </article>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const { frontmatter, content } = await getMarkdown(params.id);

  return {
    props: {
      projectId: params.id,
      frontmatter: frontmatter,
      markdownBody: content,
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
