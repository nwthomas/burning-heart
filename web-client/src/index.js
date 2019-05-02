import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router, withRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import { StripeProvider } from "react-stripe-elements";

const AppWithRouter = withRouter(App);

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <StripeProvider apiKey="pk_test_Z3HM7MQyYtl3Ka9dTECk4LAh">
        <AppWithRouter />
      </StripeProvider>
    </Provider>
  </Router>,
  document.getElementById("root")
);
