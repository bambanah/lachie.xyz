import React from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <header className="site-header">
      <div className="brand">
        <Link to="/">LACHLAN UNDERHILL</Link>
      </div>
      <Nav />
    </header>
  );
}

export default Header;
