import { useState } from "react";
import Link from "next/link";

import { getAllProjectNames } from "../../lib/projects";

import Layout from "../../components/Layout";
import styles from "../../components/styles/projects.module.scss";

export default function Projects({ repoNames }) {
  const [preview, setPreview] = useState("");

  function ProjectList() {
    const listItems = repoNames.map((repoName) => (
      <li key={repoName}>
        <Link href={`/projects/${repoName}`}>
          <a
            onMouseEnter={() => setPreview(repoName)}
            onMouseLeave={() => setPreview("")}
          >
            {repoName}
          </a>
        </Link>
      </li>
    ));

    return (
      <div className={styles.list}>
        <h1>Projects</h1>
        <ul>{listItems}</ul>
      </div>
    );
  }

  function ProjectPreview() {
    return (
      <div
        className={styles.preview}
        style={{
          backgroundImage: `url(${"img/" + preview.toLowerCase() + ".png"})`,
        }}
      >
        <h1>{preview}</h1>
      </div>
    );
  }

  return (
    <Layout title="Projects">
      <div className={styles.container}>
        <ProjectList />

        <ProjectPreview />
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const repoNames = getAllProjectNames();

  return {
    props: {
      repoNames,
    },
  };
}
