import React from "react";
import "../styles.scss";
import { Link } from "react-router-dom";

export default function Home(props) {
  return (
    <>
      <div className="home-container">
        <h1 className="hero-text" data-shadow="hello!">
          hello!
        </h1>
        <Link to="projects">Check out my projects</Link>
      </div>
    </>
  );
}
