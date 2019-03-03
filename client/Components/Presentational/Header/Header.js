import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components/native";

const HeaderContainer = styled.View`
  height: 100;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  background-color: #890620;
`;

const Header = _ => {
  return <HeaderContainer />;
};

export default Header;
