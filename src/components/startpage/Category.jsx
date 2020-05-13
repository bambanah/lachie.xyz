import React from "react";
import PropTypes from "prop-types";

import Link from "./Link";

export default function Category(props) {
  const name = props.name;
  const values = props.values;

  // Check for color variable in category entry and assign to div style
  // If found, remove from category object
  let divStyle;
  if (values._color) {
    divStyle = {
      backgroundColor: values._color,
    };
  } else {
    divStyle = {};
  }

  return (
    <div className="link-wrapper">
      <div className="wrapper-title" style={divStyle}>
        {name}
      </div>
      <div className="wrapper-body col">
        <ul>
          {values &&
            Object.keys(values).map((link_name) => {
              if (link_name !== "_color") {
                const link_url = values[link_name];
                return <Link key={link_url} url={link_url} name={link_name} />;
              }
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
