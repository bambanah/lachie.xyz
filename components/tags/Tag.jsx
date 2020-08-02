import React from "react";
import PropTypes from "prop-types";

function Tag({ name, fg, bg, key }) {
  return (
    <li className="tag" key={key}>
      <p>{name}</p>

      <style jsx>{`
        .tag {
          background-color: ${bg};
          color: ${fg};

          font-family: "Roboto Mono";
          font-size: 0.9em;
          // font-weight: bold;
          display: inline-block;
          padding: 2px 2px;
          border-radius: 2px;
          margin-right: 5px;
        }

        .tag p {
          line-height: 1em;
        }
      `}</style>
    </li>
  );
}

Tag.propTypes = {};

export default Tag;
