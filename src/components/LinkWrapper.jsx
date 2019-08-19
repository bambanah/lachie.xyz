import React, { Component } from "react";
//import PropTypes from "prop-types";

export default class LinkWrapper extends Component {
  render() {
    return (
      <div className="link-wrapper">
        <div className="wrapper-title">social</div>
        <div className="wrapper-body col">
          <ul>
            <li>
              <a href="https://google.com">google</a>
            </li>
            <li>
              <a href="https://youtube.com">youtube</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
