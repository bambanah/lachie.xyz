import React from "react";

import { firebaseConnect } from "react-redux-firebase";

function LoginButton({ firebase }) {
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

export default firebaseConnect()(LoginButton);
