import { glob } from "glob";
import matter from "gray-matter";
import * as fs from "fs";
import { join } from "path";

export function getAllProjectIds() {
	const projectGlobs = glob.sync("src/MDX/projects/*.mdx");

	const projectIds = projectGlobs.map((file) => {
		return file.split("/")[3].slice(0, -4);
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

const POSTS_PATH = join(process.cwd(), "src/MDX/projects");

export async function getMarkdown(slug: string) {
	// add path/location to a single post
	const fullPath = join(POSTS_PATH, `${slug}.mdx`);

	// post's content
	const fileContents = fs.readFileSync(fullPath, "utf-8");

	// get the front matter data and content
	const { data, content } = matter(fileContents);

	// return the front matter data and content
	return { frontmatter: data, content };
}
