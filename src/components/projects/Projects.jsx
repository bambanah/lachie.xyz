import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Projects() {
  const initialProjects = [
    {
      name: "project_a",
      name_display: "Project A",
      content: "This project is about this",
      main_image:
        "https://cdn.dribbble.com/users/413551/screenshots/12395451/media/75de475e383ea541a3ceac387010858d.png",
    },
    {
      name: "project_b",
      name_display: "Second Project",
      content: "This project is about another thing",
      main_image:
        "https://images.unsplash.com/photo-1527112862739-c3b9466d902e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format",
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
      <div
        className="project-preview"
        style={{ backgroundImage: `url(${preview.main_image})` }}
      >
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
