import Link from "next/link";

import { getAllProjects, getTagStyles } from "../../lib/projects";

import Layout from "../../components/Layout";
import TagList from "../../components/tags/TagList";

import styles from "../../components/styles/projects.module.scss";
import ProjectCard from "../../components/ProjectCard";

export default function Projects({ projects, tagStyles }) {
  function ProjectList() {
    const listItems = Object.keys(projects).map((projectId) => (
      // <div className={styles.card} key={projectId}>
      //   <Link href={`/projects/${projectId}`}>
      //     <div className={styles.card_content}>
      //       <div className={styles.card_column}>
      //         <img src={"/img/" + projects[projectId].image_name}></img>
      //       </div>
      //       <div className={styles.card_column}>
      //         <h2>{projects[projectId].display}</h2>
      //         <p>{projects[projectId].blurb}</p>
      //         <TagList tags={projects[projectId].tags}></TagList>
      //       </div>
      //     </div>
      //   </Link>
      // </div>
      <ProjectCard id={projectId} project={projects[projectId]}></ProjectCard>
    ));

    return <div className={styles.list}>{listItems}</div>;
  }

  return (
    <Layout title="Projects">
      <div className={styles.container}>
        <h1>Projects</h1>
        <ProjectList />
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const projects = getAllProjects();
  const tagStyles = getTagStyles();

  return {
    props: {
      projects,
      tagStyles,
    },
  };
}
