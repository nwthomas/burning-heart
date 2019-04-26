import React from "react";
import { Route } from "react-router";
import "./Components/styles/App.scss";

import { authenticate } from "./Components/Container/authenticate"; // HOC
import { LoginView } from "./Components/Views/LoginView";
import { LandingPage } from "./Components/Views/LandingPage";

const App = props => {
  return (
    <div className="App">
      <Route exact path="/" component={LandingPage} />
    </div>
  );
};

export default authenticate(App)(LoginView);
