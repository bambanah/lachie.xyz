import React from "react";
import { connect } from "react-redux";
import firebaseConnect from "react-redux-firebase/lib/firebaseConnect";
import { isLoaded, isEmpty } from "react-redux-firebase/lib/helpers";
import { compose } from "recompose";

function DisplayAuthAction({ firebase, auth }) {
  function LoginButton() {
    return (
      <button
        onClick={() => {
          firebase.login({ provider: "google", type: "popup" });
        }}
      >
        Login
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

  if (!isLoaded(auth)) {
    return <div>Loading...</div>;
  }
  if (isEmpty(auth)) {
    return (
      <div>
        <p>Auth is empty</p>
        <LoginButton />
      </div>
    );
  }
  return (
    <div>
      <p>Hey there, {auth.displayName}</p>
      <LogoutButton />
    </div>
  );
}

const enhance = compose(
  firebaseConnect(),
  connect(state => ({
    auth: state.firebase.auth
  }))
);
export default enhance(DisplayAuthAction);
