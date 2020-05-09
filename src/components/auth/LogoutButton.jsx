import React from "react";
import { firebaseConnect } from "react-redux-firebase";

function LogoutButton({ firebase }) {
  return (
    <button
      onClick={() => {
        firebase.logout();
      }}
    >
      logout
    </button>
  );
}

export default firebaseConnect()(LogoutButton);
