import React from "react";

export default function Link(props) {
  return (
    <li key={props.name}>
      <a key={props.url + props.name} href={props.url}>
        {props.name}
      </a>
    </li>
  );
}
