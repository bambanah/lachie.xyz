import React from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Hub from "./Hub";
import Construction from "./Construction";
import Startpage from "./Startpage";

import firebase from "firebase/app";
import "firebase/auth";
import { FirebaseAuthProvider } from "@react-firebase/auth";
import { config } from "../config/firebase";

const Root = ({ store }) => (
  <FirebaseAuthProvider firebase={firebase} {...config}>
    <Provider store={store}>
      <Router>
        <Route exact path="/" component={Construction} />
        {/* <Route path="/construction" component={Construction} /> */}
        <Route path="/hub" component={Hub} />
        <Route path="/startpage" component={Startpage} />
      </Router>
    </Provider>
  </FirebaseAuthProvider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root;
