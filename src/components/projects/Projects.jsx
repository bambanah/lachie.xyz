import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Projects() {
  const initialProjects = [
    {
      name: "project_a",
      name_display: "Project A",
      content: "This project is about this",
    },
    {
      name: "project_b",
      name_display: "Second Project",
      content: "This project is about another thing",
    },
  ];

  const [projects, setProjects] = useState(initialProjects);
  const [preview, setPreview] = useState({});

  function ProjectList() {
    const listItems = projects.map((project) => (
      <li key={project.name}>
        <Link
          to={`projects/${project.name}`}
          onMouseEnter={() => setPreview(project)}
          onMouseLeave={() => setPreview({})}
        >
          {project.name_display}
        </Link>
      </li>
    ));

    return <ul>{listItems}</ul>;
  }

  function ProjectPreview() {
    // Only assign text for previewing if there is text to preview, otherwise leave it empty
    var previewText = preview.name_display;

    return (
      <div className="project-preview">
        <h1>{previewText}</h1>
      </div>
    );
  }

  return (
    <>
      <div className="projects-content">
        <div className="project-list">
          <h1>Projects</h1>
          <ProjectList />
        </div>
        <ProjectPreview />
      </div>
    </>
  );
}
