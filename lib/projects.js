import path from "path";
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";

import repoNames from "../config/projects";

export function getAllProjectNames() {
  return repoNames;
}

export async function getMarkdownReadme(repoId) {
  // Initialise empty string for markdown content
  let readmeContent = "";

  // Get readme path based on repo id
  const readmePath = `https://raw.githubusercontent.com/Bambanah/${repoId}/master/README.md`;

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

export function getAllProjectData() {}
