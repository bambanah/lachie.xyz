import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import firebase from "firebase";
import "firebase/auth";

import { createStore, combineReducers } from "redux";
import ReactReduxFirebaseProvider from "react-redux-firebase/lib/ReactReduxFirebaseProvider";
import firebaseReducer from "react-redux-firebase/lib/reducer";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Hub from "./components/hub/Hub";
import Construction from "./components/Construction";
import Startpage from "./components/startpage/Startpage";

import * as serviceWorker from "./serviceWorker";

import { firebaseConfig } from "./config/firebase";

// react-redux-firebase config
const rrfConfig = {
  // userProfile: "users"
};

// Initialize firebase instance
firebase.initializeApp(firebaseConfig);

// Add firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer
});

// Create store with reducers and initial state
const initialState = {};
const store = createStore(rootReducer, initialState);

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch
};

const Root = ({ store }) => (
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <Router>
        <Route exact path="/" component={Construction} />
        {/* <Route path="/construction" component={Construction} /> */}
        <Route path="/hub" component={Hub} />
        <Route path="/startpage" component={Startpage} />
      </Router>
    </ReactReduxFirebaseProvider>
  </Provider>
);

// Setup react-redux so that connect HOC can be used
ReactDOM.render(<Root store={store} />, document.getElementById("root"));

serviceWorker.unregister();
