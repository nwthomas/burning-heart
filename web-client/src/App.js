import React from "react";
import "./Components/styles/App.scss";

import { authenticate } from "./Components/Container/authenticate"; // HOC
import { LoginView } from "./Components/Views/LoginView";
import { LandingPage } from "./Components/Views/LandingPage";

const App = props => {
  return (
    <div className="App">
      <LandingPage />
    </div>
  );
};

export default authenticate(App)(LoginView);
