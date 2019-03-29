import React, { Component } from "react";
import Home from "./components/Home";
import Nav from "./components/Nav";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Nav />
        <Home />
      </div>
    );
  }
}
export default App;
