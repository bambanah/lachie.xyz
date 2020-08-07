import Link from "next/link";

import styles from "./styles/projects.module.scss";
import TagList from "./tags/TagList";

export default function ProjectCard({ id, project }) {
  return (
    <div className={styles.card}>
      <Link href={`/projects/${id}`}>
        <div className={styles.card_content}>
          <div className={styles.card_column}>
            <img
              className={styles.project_image}
              src={"/img/" + project.image_name}
            ></img>
          </div>

          <div className={styles.card_column}>
            <h2>{project.title}</h2>

            <p className={styles.project_blurb}>{project.blurb}</p>

            {project.tags && <TagList tags={project.tags}></TagList>}
          </div>
        </div>
      </Link>
    </div>
  );
}
