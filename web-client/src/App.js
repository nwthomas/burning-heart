import React from "react";
import axios from "axios";
import "./Components/styles/App.scss";
import { Route } from "react-router";

import { authenticate } from "./Components/Container/authenticate"; // HOC
import { LoginView } from "./Components/Views/LoginView";
import { HomeView } from "./Components/Views/HomeView";

const App = props => {
  return (
    <div className="App">
      <HomeView />
    </div>
  );
};

export default authenticate(App)(LoginView);
