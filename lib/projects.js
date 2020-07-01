import path from "path";
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";

import projectList, { projectList2 } from "../config/projects";

export function getProject(projectId) {
  return projectList2[projectId];
}

export async function getMarkdownReadme(repoUrl) {
  // Initialise empty string for markdown content
  let readmeContent = "";

  // Get readme path based on repo id
  const readmePath = `https://raw.githubusercontent.com/${repoUrl}/master/README.md`;

  // Wait for async fetch to return readme as string
  await fetch(readmePath)
    .then((res) => res.text())
    .then((result) => {
      readmeContent = result;
    });

  // Return repo ID and markdown content (as string)
  return {
    readmeContent,
  };
}

export function getAllProjects() {
  return projectList2;
}

export function getAllProjectNames() {
  const projectNames = Object.values(projectList2).map((project) => {
    return project.display;
  });
  return projectNames;
}

export function getAllProjectData() {}
