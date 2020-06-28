import React from "react";
import PropTypes from "prop-types";

function ProjectCard(props) {
  return (
    <div className="project-1">
      <div className="project-title">{props.title}</div>
      <div className="project-abstract">{props.content}</div>
    </div>
  );
}

ProjectCard.propTypes = {};

export default ProjectCard;
