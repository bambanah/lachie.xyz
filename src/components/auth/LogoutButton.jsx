import React from "react";
import firebaseConnect from "react-redux-firebase/lib/firebaseConnect";

function LogoutButton({ firebase }) {
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

export default firebaseConnect()(LogoutButton);
