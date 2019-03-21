import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components/native";

import { SearchBar } from "../../Presentational/SearchBar";

const SearchText = styled.Text`
  font-family: "Ubuntu-Medium";
  font-size: 20;
  text-align: center;
`;

const SearchView = _ => {
  return (
    <View>
      <SearchBar />
      <SearchText>This is the search screen.</SearchText>
    </View>
  );
};

export default SearchView;
