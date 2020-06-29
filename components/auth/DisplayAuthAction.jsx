import { connect } from "react-redux";
import { isEmpty, isLoaded, firebaseConnect } from "react-redux-firebase";
import { compose } from "recompose";

import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

function DisplayAuthAction({ auth }) {
  if (!isLoaded(auth)) {
    return <div>Loading...</div>;
  }
  if (isEmpty(auth)) {
    return <LoginButton />;
  }
  return <LogoutButton />;
}

const enhance = compose(
  firebaseConnect(),
  connect((state) => ({
    auth: state.firebase.auth,
  }))
);
export default enhance(DisplayAuthAction);
