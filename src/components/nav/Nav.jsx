import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav(props) {
  return (
    <nav>
      <ul>
        <li>
          <NavLink exact to="/" activeClassName="link-active">
            home
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" activeClassName="link-active">
            projects
          </NavLink>
        </li>
        <li>
          <NavLink to="/playground" activeClassName="link-active">
            playground
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
