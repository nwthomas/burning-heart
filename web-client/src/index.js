import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router, withRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";

const AppWithRouter = withRouter(App);

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <AppWithRouter />
    </Provider>
  </Router>,
  document.getElementById("root")
);
