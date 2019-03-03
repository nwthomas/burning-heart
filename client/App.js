import React, { useState, useEffect, useReducer } from "react";
import { StyleSheet, Text, View } from "react-native";
import styled from "styled-components/native";

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
    <AppContainer>
      <FontTest>burning heart</FontTest>
    </AppContainer>
  );
};

export default App;
