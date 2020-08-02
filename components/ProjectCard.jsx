import Link from "next/link";

import styles from "./styles/projects.module.scss";
import TagList from "./tags/TagList";

export default function ProjectCard({ id, project }) {
  return (
    <div className={styles.card}>
      <Link href={`/projects/${id}`}>
        <div className={styles.card_content}>
          <div className={styles.card_column}>
            <img src={"/img/" + project.image_name}></img>
          </div>
          <div className={styles.card_column}>
            <h2>{project.display}</h2>
            <p>{project.blurb}</p>
            <TagList tags={project.tags}></TagList>
          </div>
        </div>
      </Link>
    </div>
  );
}
