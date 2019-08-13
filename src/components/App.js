import React, { Component } from "react";

import { Link } from "react-router-dom";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab);

class App extends Component {
  render() {
    return (
      <div className="container">
        <div>This is the main hub of the site.</div>
        <div>
          <ul>
            <li>
              <Link to="/">Construction</Link>
            </li>
            <li>
              <Link to="/startpage">Start Page</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
export default App;
