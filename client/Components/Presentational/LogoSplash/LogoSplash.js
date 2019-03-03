import React from "react";
import styled from "styled-components/native";

const LoginContainer = styled.View`
  justify-content: center;
  flex: 1;
  align-items: center;
  background: #e9eeef;
`;

const LogoName = styled.Text`
  font-family: "Ubuntu-Medium";
  font-size: 20;
  text-align: center;
`;

const LogoSplash = _ => {
  return (
    <LoginContainer>
      <LogoName>burning heart</LogoName>
    </LoginContainer>
  );
};

export default LogoSplash;
