import React, { Component } from "react";
import Construction from "./components/Construction";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab);

class App extends Component {
  render() {
    return (
      <div className="container">
        <Construction />
      </div>
    );
  }
}
export default App;
