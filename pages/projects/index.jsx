import { useState } from "react";
import Link from "next/link";

import { getAllProjectData } from "../../lib/projects";

import Layout from "../../components/Layout";
import styles from "../../components/styles/projects.module.scss";

export default function Projects({ allProjectData }) {
  const [preview, setPreview] = useState({});

  function ProjectList() {
    const listItems = allProjectData.map((project) => (
      <li key={project.fileId}>
        <Link href={`/projects/${project.fileId}`}>
          <a
            onMouseEnter={() => setPreview(project)}
            onMouseLeave={() => setPreview({})}
          >
            {project.title}
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
        style={{ backgroundImage: `url(${preview.hero_image})` }}
      >
        <h1>{preview.title}</h1>
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
  const allProjectData = getAllProjectData();

  return {
    props: {
      allProjectData,
    },
  };
}
