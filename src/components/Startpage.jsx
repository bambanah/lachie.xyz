import React from "react";
import "./styles.scss";

import LinkWrapper from "./LinkWrapper";
import DisplayAuthAction from "./DisplayAuthAction";
import { compose } from "recompose";
import { connect } from "react-redux";
import firebaseConnect from "react-redux-firebase/lib/firebaseConnect";
import { isEmpty } from "react-redux-firebase/lib/helpers";

function Startpage({ auth, firebase, getLinks }) {
  if (isEmpty(auth)) {
    return (
      <div>
        <p>Please sign in first.</p>
        <DisplayAuthAction />
      </div>
    );
  }

  return (
    <div className="startpage-container">
      <div className="content-wrapper">
        <div className="content">
          <div className="splash">
            <h1>Hello</h1>
          </div>
          <div className="links-container">
            <LinkWrapper userId={auth.uid} />
          </div>
        </div>
        <div className="auth-wrapper">
          <DisplayAuthAction />
        </div>
      </div>
    </div>
  );
}

const enhance = compose(
  firebaseConnect(),
  connect(state => ({
    auth: state.firebase.auth
  }))
);
export default enhance(Startpage);
