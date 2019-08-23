import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import firebaseConnect from "react-redux-firebase/lib/firebaseConnect";
import { isLoaded, isEmpty } from "react-redux-firebase/lib/helpers";
import { withHandlers } from "recompose";
import { get } from "lodash";

function Todos({ links, firebase, auth, addSampleTodo, removeSampleTodo }) {
  console.log(links);

  if (!isLoaded(links)) {
    return <div>Loading...</div>;
  }
  if (isEmpty(links)) {
    return (
      <div>
        <div>Todos List Is Empty</div>{" "}
        <button onClick={addSampleTodo}>Add Item</button>
      </div>
    );
  }
  return (
    <div>
      <ul>
        {Object.keys(links).map((key, id) => (
          <li key={key}>
            key={key}, todo={links[key].text}
            <button onClick={removeSampleTodo(key)}>X</button>
          </li>
        ))}
        <li>
          <button onClick={addSampleTodo}>Add Item</button>
        </li>
      </ul>
    </div>
  );
}

export default compose(
  firebaseConnect(props => [
    `links/${props.userId}` // sync /links/userId from firebase into redux
  ]),

  connect((state, props) => ({
    auth: state.firebase.auth,
    links: get(state.firebase.data, `links.${props.userId}`)
  })),

  withHandlers({
    addSampleTodo: props => () => {
      const userId = props.auth.uid;
      const sampleTodo = { text: "Sample", done: false };
      return props.firebase.push(`links/${userId}`, sampleTodo);
    },

    removeSampleTodo: props => key => () => {
      const userId = props.auth.uid;
      return props.firebase.remove(`links/${userId}/${key}`);
    }
  })
)(Todos);
