import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import Link from "./Link";

export default function Category(props) {
  const [state, setState] = useState(props);
  useEffect(() => {
    setState(props);
  }, [props]);

  // Check for color variable in category entry and assign to div style
  // If found, remove from category object
  let divStyle;
  if (state.values._color) {
    divStyle = {
      backgroundColor: state.values._color,
    };
  } else {
    divStyle = {};
  }

  const path = `users/${props.userId}/links/${state.name}`;

  return (
    <div className="link-wrapper">
      <div className="wrapper-title" style={divStyle}>
        {state.name}
      </div>
      <div className="wrapper-body col">
        <ul>
          {state.values &&
            Object.keys(state.values) // Get array of keys from link values
              .filter((link_name) => link_name !== "_color") // Don't display color variable in link list
              .map((link_name) => {
                const link_url = state.values[link_name];
                return (
                  <Link
                    key={link_url}
                    url={link_url}
                    name={link_name}
                    edit={state.edit}
                    path={path}
                  />
                );
              })}
        </ul>
      </div>
    </div>
  );
}

Category.propTypes = {
  name: PropTypes.string,
  category: PropTypes.object,
};
