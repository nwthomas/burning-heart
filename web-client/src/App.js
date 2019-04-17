import React, { Component } from "react";
import "./Components/styles/App.scss";
import { Router } from "react-router";

import { Navbar } from "./Components/Navbar";

const App = props => {
  return (
    <div className="App">
      <Navbar />
    </div>
  );
};

export default App;
