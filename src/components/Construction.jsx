import React, { Component } from "react";
import "./styles.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Construction extends Component {
  render() {
    return (
      <div className="construction-container">
        <h1>
          <span className="emoji" role="img" aria-label="construction-sign">
            🚧
          </span>
          <span className="text">Coming Soon</span>
          <span className="emoji" role="img" aria-label="construction-sign">
            🚧
          </span>
        </h1>
        <ul className="links">
          <li>
            <a href="https://github.com/Bambanah">
              <FontAwesomeIcon icon={["fab", "github"]} size="2x" />
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
