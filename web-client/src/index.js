import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router, withRouter } from "react-router-dom";
import { MyStore } from "./Components/store/store";

const AppWithRouter = withRouter(App);

ReactDOM.render(
  <Router>
    <MyStore>
      <AppWithRouter />
    </MyStore>
  </Router>,
  document.getElementById("root")
);
