import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import ArticleMarkdown from "./Content.mdx";
// import marked from "marked";

export default function ProjectA() {
  const [state, setState] = useState({ markdown: "Loading..." });

  useEffect(() => {
    fetch(ArticleMarkdown)
      .then((response) => {
        return response.text();
      })
      .then((text) => {
        console.log(text);
        setState({
          markdown: text,
        });
      });
  }, []);

  return (
    <div className="project-body">
      <ReactMarkdown source={state.markdown} />
    </div>
  );
}
