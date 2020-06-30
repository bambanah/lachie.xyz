import { useState } from "react";
import Link from "next/link";
import Layout from "../../components/Layout";

import styles from "../../components/styles/projects.module.scss";

function Projects() {
  const initialProjects = [
    {
      name: "project_a",
      name_display: "Project A",
      content: "This project is about this",
      main_image: "/img/project_a.png",
    },
    {
      name: "project_b",
      name_display: "Second Project",
      content: "This project is about another thing",
      main_image: "/img/project_b.png",
    },
  ];

  const [projects, setProjects] = useState(initialProjects);
  const [preview, setPreview] = useState({});

  function ProjectList() {
    const listItems = projects.map((project) => (
      <li key={project.name}>
        <Link href={`/projects/${project.name}`}>
          <a
            onMouseEnter={() => setPreview(project)}
            onMouseLeave={() => setPreview({})}
          >
            {project.name_display}
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
        style={{ backgroundImage: `url(${preview.main_image})` }}
      >
        <h1>{preview.name_display}</h1>
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

export default Projects;
