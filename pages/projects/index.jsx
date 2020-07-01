import { useState } from "react";
import Link from "next/link";

import { getAllProjects, getAllProjectNames } from "../../lib/projects";

import Layout from "../../components/Layout";
import styles from "../../components/styles/projects.module.scss";

export default function Projects({ projects }) {
  const [preview, setPreview] = useState("");

  function ProjectList() {
    const listItems = Object.keys(projects).map((projectId) => (
      <li key={projectId}>
        <Link href={`/projects/${projectId}`}>
          <a
            onMouseEnter={() => setPreview(projects[projectId])}
            onMouseLeave={() => setPreview("")}
          >
            {projects[projectId].display}
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
          backgroundImage: `url(${"img/" + preview.image_name})`,
        }}
      >
        <h1>{preview.display}</h1>
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
  const projects = getAllProjects();

  return {
    props: {
      projects,
    },
  };
}
