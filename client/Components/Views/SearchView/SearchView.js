import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components/native";

const SearchText = styled.Text`
  font-family: "Ubuntu-Medium";
  font-size: 20;
  text-align: center;
`;

const SearchView = _ => {
  return (
    <View>
      <SearchText>This is the search screen.</SearchText>
    </View>
  );
};

export default SearchView;
