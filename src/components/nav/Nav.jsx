import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav(props) {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/home" activeClassName="link-active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" activeClassName="link-active">
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink to="/playground" activeClassName="link-active">
            Playground
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
