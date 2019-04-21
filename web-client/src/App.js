import React, { Component } from "react";
import "./Components/styles/App.scss";
import { Route } from "react-router";

import { authenticate } from "./Components/Container/authenticate"; // HOC
import { LoginView } from "./Components/Views/LoginView";
import { Navbar } from "./Components/Presentational/Navbar";

const App = props => {
  return (
    <div className="App">
      <Navbar />
    </div>
  );
};

export default authenticate(App)(LoginView);
