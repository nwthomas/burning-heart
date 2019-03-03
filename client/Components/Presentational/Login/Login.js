import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components/native";

const LoginContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: #e9eeef;
`;

const FontTest = styled.Text`
  font-family: "Ubuntu-Medium";
  font-size: 20;
  text-align: center;
`;

const Login = _ => {
  return (
    <LoginContainer>
      <FontTest>Please sign in.</FontTest>
    </LoginContainer>
  );
};

export default Login;
