import React from "react";
import "../styles.scss";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Home(props) {
  return (
    <>
      <div className="home-container">
        <h1 className="hero-text" data-shadow="hello!">
          hello!
        </h1>
        <Link to="projects">
          Check out my projects <FontAwesomeIcon icon={faArrowRight} />
        </Link>
      </div>
    </>
  );
}
