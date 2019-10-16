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
              <LinkWrapper
                title="social"
                content={[
                  {
                    name: "google",
                    url: "https://www.google.com/",
                    color: "#FF0000"
                  },
                  { name: "youtube", url: "https://www.youtube.com/" },
                  { name: "facebook", url: "https://www.facebook.com/" }
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
