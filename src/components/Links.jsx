import React from "react";

export default function Links(props) {
  const link_content = props.content;
  link_content.forEach(link => {
    return (
      <li>
        <a href={link.url}>{link.name}</a>
      </li>
    );
  });
}
