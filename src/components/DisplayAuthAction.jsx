import React from "react";
import { connect } from "react-redux";
import firebaseConnect from "react-redux-firebase/lib/firebaseConnect";
import { isEmpty } from "react-redux-firebase/lib/helpers";
import { compose } from "recompose";

function DisplayAuthAction({ firebase, auth }) {
  function LoginButton() {
    return (
      <button
        onClick={() => {
          firebase.login({ provider: "google", type: "popup" });
        }}
      >
        Login with Google
      </button>
    );
  }

  function LogoutButton() {
    return (
      <button
        onClick={() => {
          firebase.logout();
        }}
      >
        Logout
      </button>
    );
  }

  if (isEmpty(auth)) {
    return <LoginButton />;
  }
  return <LogoutButton />;
}

const enhance = compose(
  firebaseConnect(),
  connect(state => ({
    auth: state.firebase.auth
  }))
);
export default enhance(DisplayAuthAction);
