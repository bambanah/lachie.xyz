import React, { Component } from "react";
import { IfFirebaseAuthed, IfFirebaseUnAuthed } from "@react-firebase/auth";
import LogoutButton from "./LogoutButton";
import LoginButton from "./LoginButton";

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
