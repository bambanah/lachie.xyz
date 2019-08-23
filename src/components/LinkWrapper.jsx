import React from "react";
import { compose, withHandlers } from "recompose";
import { connect } from "react-redux";
import firebaseConnect from "react-redux-firebase/lib/firebaseConnect";
import { get } from "lodash";
import PropTypes from "prop-types";

function LinkWrapper({ linkCategories }) {
  function Links(props) {
    return (
      <ul>
        {props.content &&
          Object.keys(props.content).map(link_name => {
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

  return (
    <>
      {linkCategories &&
        Object.keys(linkCategories).map(category_name => {
          const category = linkCategories[category_name];
          return (
            <div className="link-wrapper" key={category_name}>
              <div className="wrapper-title">{category_name}</div>
              <div className="wrapper-body col">
                <Links content={category} />
              </div>
            </div>
          );
        })}
    </>
  );
}

LinkWrapper.propTypes = {
  linkCategories: PropTypes.object
};

export default compose(
  firebaseConnect(props => [
    `links/${props.userId}/categories` // sync /links/userId from firebase into redux
  ]),

  connect((state, props) => ({
    linkCategories: get(state.firebase.data, `links.${props.userId}.categories`)
  })),

  withHandlers({
    addLink: props => () => {
      const userId = props.auth.uid;
      const sampleTodo = { text: "Sample", done: false };
      return props.firebase.push(`links/${userId}`, sampleTodo);
    },

    removeLink: props => key => () => {
      const userId = props.auth.uid;
      return props.firebase.remove(`links/${userId}/${key}`);
    }
  })
)(LinkWrapper);
