import React from "react";
import Nav from "./Nav";

function Header(props) {
  return (
    <header className="site-header">
      <div className="brand">
        <a href="/">LACHLAN UNDERHILL</a>
      </div>
      <Nav />
    </header>
  );
}

export default Header;
