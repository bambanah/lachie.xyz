import { getAllProjects } from "../../lib/projects";

import Layout from "@components/layout";

import styles from "@styles/projects.module.scss";
import ProjectCard from "@components/project-card";

interface Props {
	projects: {
		[id: string]: {
			[id: string]: any;
		};
	};
}

const Projects: React.FC<Props> = ({ projects }) => {
	function ProjectList() {
		const listItems = Object.keys(projects).map((projectId) => (
			<ProjectCard
				id={projectId}
				project={projects[projectId]}
				key={projectId}
			></ProjectCard>
		));

		return <div className={styles.list}>{listItems}</div>;
	}

	return (
		<Layout title="Projects">
			<div className={styles.container}>
				<div className={styles.heading_div}>
					<h1>Projects</h1>
				</div>
				<ProjectList />
			</div>
		</Layout>
	);
};

export async function getStaticProps() {
	const projects = getAllProjects();

	return {
		props: {
			projects,
		},
	};
}

export default Projects;
