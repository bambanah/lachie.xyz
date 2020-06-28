import React from "react";
import ProjectCard from "./ProjectCard";

export default function ProjectPreview() {
  return (
    <div>
      <ProjectCard
        title="Project A"
        content="This project is about this thing"
      />
      <ProjectCard
        title="Project B"
        content="This project is about that thing"
      />
    </div>
  );
}
