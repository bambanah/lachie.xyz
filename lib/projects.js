import projectList, { tagList } from "../config/projects";
import { glob } from "glob";

// ----- Project functions -----

export function getAllProjectIds() {
  const projectGlobs = glob.sync("MDX/projects/*.md");

  const projectIds = projectGlobs.map((file) => {
    return file.split("/")[2].slice(0, -3);
  });

  return projectIds;
}

export function getAllProjects() {
  // TODO: Return all frontmatter from markdown
  return projectList;
}

// ----- Markdown functions -----
export async function getGithubMarkdown(repoUrl) {
  // Get readme path based on repo id
  const readmePath = `https://raw.githubusercontent.com/${repoUrl}/master/README.md`;

  return markdownFromPath(readmePath);
}

export async function getLocalMarkdown(projectName) {
  // Get local readme path based on project name
  const readmePath = `/markdown/projects/${projectName}.mdx`;

  return markdownFromPath(readmePath);
}

export async function markdownFromPath(readmePath) {
  // Initialise empty string for markdown content
  let readmeContent = "";
  console.log(readmePath);
  // Wait for async fetch to return readme as string
  await fetch(readmePath)
    .then((res) => res.text())
    .then((result) => {
      readmeContent = result;
    });

  console.log(readmeContent);
  // Return repo ID and markdown content (as string)
  return { readmeContent };
}

// Get tag styles

export function getTagStyles() {
  return tagList;
}
