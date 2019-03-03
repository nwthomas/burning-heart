import React, { useState, useEffect, useReducer } from "react";
import { Text, View } from "react-native";
import styled from "styled-components/native";
import { NativeRouter, Route, Link } from "react-router-native";

import { LoginView } from "./Components/Views/LoginView";
// import { HomeView } from "./Components/Views/HomeView";
import { authenticate } from "./Components/Presentational/authenticate";

const AppContainer = styled.View`
  justify-content: center;
  flex: 1;
  align-items: center;
  background: #e9eeef;
`;

const FontTest = styled.Text`
  font-family: "Ubuntu-Medium";
  font-size: 20;
  text-align: center;
`;

const App = _ => {
  const [value, setValue] = useState("Dude");
  return (
    <NativeRouter>
      <AppContainer>
        <FontTest>burning heart</FontTest>
      </AppContainer>
    </NativeRouter>
  );
};

// export default authenticate(App)(LoginView);
export default authenticate(App)(LoginView);
