import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import reducers from "./reducers";
import * as serviceWorker from "./serviceWorker";

import Root from "./components/Root";

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(<Root store={store} />, document.getElementById("root"));

serviceWorker.unregister();
