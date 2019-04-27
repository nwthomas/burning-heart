import React from "react";
import { Route } from "react-router";
import "./Components/styles/App.scss";

import { LandingPage } from "./Components/Views/LandingPage";
import { WebClient } from "./Components/Views/WebClient";
import { SignUpForm } from "./Components/Container/SignUpForm";

const App = ({ history, match }) => {
  return (
    <div className="App">
      <Route exact path="/" component={LandingPage} />
      <Route path="/home" component={WebClient} />
      <Route path="/signup" component={SignUpForm} history={history} />
    </div>
  );
};

export default App;
