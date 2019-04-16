/**
 * @format
 */

import React from "react";
import { AppRegistry } from "react-native";
import App from "./App";
import { name as appName } from "./app.json";
import { MyStore } from "./Components/store/store";
import { NativeRouter as Router } from "react-router-native";

// Built out combined Router + MyStore to accomodate global state store with authentication needs
const AppWithMyStoreAndRouter = () => {
  return (
    <Router>
      <MyStore>
        <App />
      </MyStore>
    </Router>
  );
};

AppRegistry.registerComponent(appName, () => AppWithMyStoreAndRouter);
