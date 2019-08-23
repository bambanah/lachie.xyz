import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import firebaseConnect from "react-redux-firebase/lib/firebaseConnect";
import { isLoaded, isEmpty } from "react-redux-firebase/lib/helpers";
import { withHandlers } from "recompose";

function Todos({ links, firebase, addSampleTodo, removeSampleTodo }) {
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
  firebaseConnect(() => [
    "links" // { path: '/todos' } // object notation
  ]),
  connect(state => ({
    links: state.firebase.data.links
    // profile: state.firebase.profile // load profile
  })),
  withHandlers({
    addSampleTodo: props => () => {
      const sampleTodo = { text: "Sample", done: false };
      return props.firebase.push("links", sampleTodo);
    },
    removeSampleTodo: props => key => () => {
      return props.firebase.remove(`links/${key}`);
    }
  })
)(Todos);
