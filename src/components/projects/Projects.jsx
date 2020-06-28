import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Projects() {
  const initialProjects = [
    {
      name: "project_a",
      name_display: "Project A",
      content: "This project is about this",
      main_image: "./img/project_a.png",
    },
    {
      name: "project_b",
      name_display: "Second Project",
      content: "This project is about another thing",
      main_image: "./img/project_b.png",
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
    if (previewText !== undefined) {
      return (
        <div
          className="project-preview"
          style={{ backgroundImage: `url(${preview.main_image})` }}
        >
          <h1>{previewText}</h1>
        </div>
      );
    } else {
      return <div className="project-preview"></div>;
    }
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
