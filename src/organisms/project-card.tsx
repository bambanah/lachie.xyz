import Image from "next/image";
import Link from "next/link";

import styles from "@styles/projects.module.scss";
import TagList from "@molecules/tag-list";

interface Props {
	id: string;
	project: any;
}

export default function ProjectCard({ id, project }: Props) {
	return (
		<div className={styles.card}>
			<Link href={`/projects/${id}`}>
				<div className={styles.card_content}>
					<div className={styles.card_column}>
						<Image
							className={styles.project_image}
							src={`/img/${project.image_name}`}
							width="400px"
							height="250px"
							alt="Project Image"
						/>
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
