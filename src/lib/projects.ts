import { glob } from "glob";
import matter from "gray-matter";

export function getAllProjectIds() {
	const projectGlobs = glob.sync("MDX/projects/*.md");

	const projectIds = projectGlobs.map((file) => {
		return file.split("/")[2].slice(0, -3);
	});

	return projectIds;
}

export function getAllProjects() {
	const projectIds = getAllProjectIds();

	const projects: { [id: string]: { [id: string]: any; content: string } } = {};

	projectIds.map((id) => {
		getMarkdown(id).then(({ frontmatter, content }) => {
			projects[id] = { ...frontmatter, content: content };
		});
	});

	return projects;
}

export async function getMarkdown(projectName: string) {
	const content = await import(`../MDX/projects/${projectName}.md`);
	const data = matter(content.default);

	return {
		frontmatter: data.data,
		content: data.content,
	};
}
