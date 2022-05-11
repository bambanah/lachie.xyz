import {
	getAllProjectIds,
	getAllProjects,
	getMarkdown,
} from "src/lib/projects";

describe("Tests", () => {
	it("should get projects", () => {
		const projectIds = getAllProjectIds();
		expect(projectIds).toEqual(["depot", "sentiment_analysis", "startpage"]);
	});

	it("should get project content", async () => {
		const projects = await getMarkdown("depot");
		expect(projects.content.trim()).toEqual("## A bit about my personal site.");

		expect(projects.frontmatter).toEqual({
			blurb: "My personal site (this one!) built with Next.js and React.",
			image_name: "depot.png",
			repo_url: "https://github.com/Bambanah/Depot",
			tags: ["react", "nextjs"],
			title: "Personal Site",
		});
	});

	it("should get all projects", () => {
		const projects = getAllProjects();
		expect(projects).toEqual({});
	});
});

export {};
