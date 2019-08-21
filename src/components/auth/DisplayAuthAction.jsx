import React, { Component } from "react";
import { IfFirebaseAuthed, IfFirebaseUnAuthed } from "@react-firebase/auth";
import firebase from "firebase/app";

export default class DisplayAuthAction extends Component {
  render() {
    return (
      <div className="auth-action-display-container">
        <IfFirebaseAuthed>
          <LogoutButton />
        </IfFirebaseAuthed>
        <IfFirebaseUnAuthed>
          <LoginButton />
        </IfFirebaseUnAuthed>
      </div>
    );
  }
}

function LoginButton() {
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

function LogoutButton() {
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
