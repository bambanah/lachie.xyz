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
  const [preview, setPreview] = useState({ name_display: "Projects" });

  function ProjectList() {
    const listItems = projects.map((project) => (
      <li
        key={project.name}
        onMouseEnter={() => setPreview(project)}
        onMouseLeave={() => setPreview({ name_display: "Projects" })}
      >
        <Link to={`projects/${project.name}`}>{project.name_display}</Link>
      </li>
    ));

    return <ul className="project-list">{listItems}</ul>;
  }

  return (
    <>
      <div className="projects-content">
        <h1>{preview.name_display}</h1>
        <ProjectList />
      </div>
    </>
  );
}
