import React, { Component } from "react";
import "./styles.scss";

import LinkWrapper from "./LinkWrapper";

export default class Startpage extends Component {
  render() {
    return (
      <div className="startpage-container">
        <div className="content-wrapper">
          <div className="content">
            <div className="splash">
              <h1>Hello</h1>
            </div>
            <div className="links-container">
              <LinkWrapper title="social" body="string_here" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
