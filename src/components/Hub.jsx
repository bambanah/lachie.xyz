import React, { Component } from "react";

import { Link } from "react-router-dom";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

import DisplayAuthAction from "./DisplayAuthAction";

import Todos from "./Todos";

library.add(fab);

class Hub extends Component {
  render() {
    return (
      <div className="hub-container">
        <div>This is the main hub of the site.</div>
        <div>
          <ul>
            <li>
              <Link to="/">Construction</Link>
            </li>
            <li>
              <Link to="/startpage">Start Page</Link>
            </li>
            <li>
              <DisplayAuthAction />
            </li>
            <li>
              <Todos />
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
export default Hub;
