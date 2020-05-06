import React, { useState } from "react";
import "../styles.scss";

import LinkWrapper from "./LinkWrapper";
import DisplayAuthAction from "../auth/DisplayAuthAction";
import { compose } from "recompose";
import { connect } from "react-redux";
import { isEmpty, isLoaded, firebaseConnect } from "react-redux-firebase";

import ErrorBoundary from "../ErrorBoundary";
import Menu from "./Menu";

function Startpage({ auth }) {
  const [state, setState] = useState({ active: false });

  if (!isLoaded(auth)) {
    return <div>Loading...</div>;
  }

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
          <ErrorBoundary>
            <div className="links-container">
              <LinkWrapper userId={auth.uid} />
            </div>
          </ErrorBoundary>
        </div>
        <div className="footer">
          <button onClick={() => setState({ active: !state.active })}>
            menu
          </button>
        </div>
        {state.active && (
          <div className="menu">
            <Menu></Menu>
          </div>
        )}
      </div>
    </div>
  );
}

const enhance = compose(
  firebaseConnect(),
  connect((state) => ({
    auth: state.firebase.auth,
  }))
);
export default enhance(Startpage);
