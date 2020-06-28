import React from "react";
import ReactMarkdown from "react-markdown";

export default function ProjectA() {
  const input = "# This is a header\n\nAnd this is a paragraph";

  return (
    <div>
      <ReactMarkdown source={input} />
    </div>
  );
}
