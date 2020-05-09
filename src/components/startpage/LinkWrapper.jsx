import React from "react";
import { useSelector } from "react-redux";
import { useFirebaseConnect, isEmpty } from "react-redux-firebase";

function Links(props) {
  return (
    <ul>
      {props.content &&
        Object.keys(props.content).map((link_name) => {
          const link_url = props.content[link_name];
          return (
            <li key={link_url}>
              <a href={link_url}>{link_name}</a>
            </li>
          );
        })}
    </ul>
  );
}

export default function LinkWrapper(props) {
  useFirebaseConnect(`users/${props.userId}/links`);

  let linkCategories = useSelector(
    ({
      firebase: {
        ordered: { users },
      },
    }) => users && users[props.userId].links
  );

  let edit_mode = false;
  if (isEmpty(linkCategories)) {
    return <div>Loading...</div>;
  } else {
    let categories = {};
    linkCategories.forEach((category, index) => {
      categories[category.key] = category.value;
    });

    return (
      <>
        {categories &&
          Object.keys(categories).map((category_name) => {
            const category = categories[category_name];

            // Check for color variable in category entry and assign to div style
            // If found, remove from category object
            let divStyle;
            if (category._color) {
              divStyle = {
                backgroundColor: category._color,
              };
              delete category._color;
            } else {
              divStyle = {};
            }

            return (
              <div className="link-wrapper" key={category_name}>
                <div className="wrapper-title" style={divStyle}>
                  {category_name}
                </div>
                <div className="wrapper-body col">
                  <Links content={category} edit={edit_mode} />
                </div>
              </div>
            );
          })}
      </>
    );
  }
}
