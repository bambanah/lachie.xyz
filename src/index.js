import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from "./config/firebase";

import { createStore, combineReducers, compose } from "redux";
import {
  ReactReduxFirebaseProvider,
  firebaseReducer,
} from "react-redux-firebase";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Hub from "./components/hub/Hub";
import Home from "./components/hub/Home";
import Construction from "./components/Construction";
import Startpage from "./components/startpage/Startpage";



// react-redux-firebase config
const rrfConfig = {
  // userProfile: "users"
};

// Initialize firebase instance
firebase.initializeApp(firebaseConfig);

// Add firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer,
});

// Create store with reducers and initial state
const initialState = {};
const store = createStore(rootReducer, initialState);

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
};

const Root = ({ store }) => (
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/construction" component={Construction} />
        <Route path="/hub" component={Hub} />
        <Route path="/startpage" component={Startpage} />
      </Router>
    </ReactReduxFirebaseProvider>
  </Provider>
);

// Setup react-redux so that connect HOC can be used
ReactDOM.render(<Root store={store} />, document.getElementById("root"));

