import React, { useState, useEffect } from "react";

export default function Link(props) {
  const [state, setState] = useState(props);

  useEffect(() => {
    setState(props);
  }, [props]);

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
