import React, { Component } from "react";
import firebase from "firebase/app";

export default class LoginButton extends Component {
  render() {
    return (
      <div>
        <button
          onClick={() => {
            firebase
              .app()
              .auth()
              .signInAnonymously();
          }}
        >
          Sign in anonymously
        </button>
        <button
          onClick={() => {
            const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
            firebase.auth().signInWithPopup(googleAuthProvider);
          }}
        >
          Sign in with Google
        </button>
      </div>
    );
  }
}
