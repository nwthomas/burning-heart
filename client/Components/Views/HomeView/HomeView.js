import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components/native";

const HomeText = styled.Text`
  font-family: "Ubuntu-Medium";
  font-size: 20;
  text-align: center;
`;

const HomeView = props => {
  return (
    <View>
      <HomeText>This is the home screen.</HomeText>
    </View>
  );
};

export default HomeView;
