import React, { Component } from "react";
import firebase from "firebase/app";

export default class LogoutButton extends Component {
  render() {
    return (
      <button
        onClick={() => {
          firebase
            .app()
            .auth()
            .signOut();
        }}
      >
        Sign out
      </button>
    );
  }
}
