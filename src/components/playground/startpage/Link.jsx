import React, { useState, useEffect } from "react";
import { useFirebase, useFirebaseConnect } from "react-redux-firebase";

export default function Link(props) {
  const [state, setState] = useState(props);
  useFirebaseConnect(`users/${props.userId}/links`);

  let firebase = useFirebase();

  useEffect(() => {
    setState(props);
  }, [props]);

  function updateLink() {
    const newValue = { [state.name]: state.url };

    firebase.set(props.path, newValue);
  }

  if (state.edit) {
    return (
      <li key={state.name}>
        <a key={state.url + state.name} href={state.url}>
          {state.name} [edit]
        </a>
      </li>
    );
  } else {
    return (
      <li key={state.name}>
        <a key={state.url + state.name} href={state.url}>
          {state.name}
        </a>
      </li>
    );
  }
}
