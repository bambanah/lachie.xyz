import React, { Component } from "react";

export class Nav extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <button>Home</button>
          </li>
          <li>
            <button>Projects</button>
          </li>
          <li>
            <button>GitHub</button>
          </li>
        </ul>
      </nav>
    );
  }
}
