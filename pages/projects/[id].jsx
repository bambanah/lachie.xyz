import Layout from "../../components/Layout";
import styles from "../../components/styles/projects.module.scss";

import ReactMarkdown from "react-markdown";
import Link from "next/link";
import useSWR from "swr";

import matter from "gray-matter";

import {
  getProject,
  getAllProjectIds,
  getLocalMarkdown,
} from "../../lib/projects";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { glob } from "glob";

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
        <Link href="/projects">
          <a className={styles.back_link}>
            <FontAwesomeIcon icon={faArrowLeft} /> back to projects
          </a>
        </Link>

        <br />

        <h1 className="title">{frontmatter.title}</h1>
        {markdownBody && <ReactMarkdown source={markdownBody} />}

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
  const content = await import(`../../MDX/projects/${params.id}.md`);
  const data = matter(content.default);

  return {
    props: {
      projectId: params.id,
      frontmatter: data.data,
      markdownBody: data.content,
    },
  };
}

export async function getStaticPaths() {
  const projectIds = getAllProjectIds();

  const paths = projectIds.map((id) => {
    console.log(id);
    return {
      params: { id: id },
    };
  });

  return {
    paths: paths,
    fallback: false,
  };
}
