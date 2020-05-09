import React from "react";
import { compose, withHandlers } from "recompose";
import { connect, useSelector } from "react-redux";
import {
  firebaseConnect,
  useFirebaseConnect,
  isLoaded,
  isEmpty,
} from "react-redux-firebase";
import { get } from "lodash";
import PropTypes from "prop-types";

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

LinkWrapper.propTypes = {
  linkCategories: PropTypes.object,
};

// export default compose(
//   firebaseConnect((props) => [
//     `users/${props.userId}/links`, // sync /links/userId from firebase into redux
//   ]),

//   connect((state, props) => ({
//     linkCategories: get(state.firebase.data, `users.${props.userId}.links`),
//   })),

//   withHandlers({
//     addLink: (props) => () => {
//       const userId = props.auth.uid;
//       const sampleTodo = { text: "Sample", done: false };
//       return props.firebase.push(`links/${userId}`, sampleTodo);
//     },

//     removeLink: (props) => (key) => () => {
//       const userId = props.auth.uid;
//       return props.firebase.remove(`links/${userId}/${key}`);
//     },
//   })
// )(LinkWrapper);
