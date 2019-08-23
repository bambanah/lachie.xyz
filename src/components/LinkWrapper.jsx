import React from "react";
import { compose, withHandlers } from "recompose";
import { connect } from "react-redux";
import firebaseConnect from "react-redux-firebase/lib/firebaseConnect";
import { get } from "lodash";
import PropTypes from "prop-types";

function LinkWrapper({ linkCategories }) {
  function Links() {
    return (
      <ul>
        <li>
          <a href="https://google.com">sup</a>
        </li>
      </ul>
    );
  }

  return (
    <>
      {linkCategories &&
        Object.keys(linkCategories).map(category => {
          return (
            <div className="link-wrapper">
              <div className="wrapper-title">{category.title}</div>
              <div className="wrapper-body col">
                <Links content={category.links} />
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
    `links/${props.userId}` // sync /links/userId from firebase into redux
  ]),

  connect((state, props) => ({
    linkCategories: get(state.firebase.data, `links.${props.userId}`)
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
