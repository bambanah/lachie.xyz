import React, { Component } from "react";
import "./style.css";

export default class Construction extends Component {
  render() {
    return (
      <div className="construction">
        <h1>
          <span className="emoji" role="img" aria-label="construction-sign">
            🚧
          </span>{" "}
          Coming Soon{" "}
          <span className="emoji" role="img" aria-label="construction-sign">
            🚧
          </span>
        </h1>
      </div>
    );
  }
}
