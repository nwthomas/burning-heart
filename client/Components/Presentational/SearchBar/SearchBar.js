import React, { useState } from "react";
import { Text, View, TextInput } from "react-native";
import styled from "styled-components/native";

const Input = styled.TextInput`
  padding-bottom: 20;
  border-color: black;
  border-width: 1;
`;

const SearchBar = props => {
  const [search, setSearch] = useState("");
  const handleChange = e => {
    e.preventDefault();
    setSearch(e.target.value);
  };
  return (
    <View>
      <Input
        placeholder="Dude"
        onChange={handleChange}
        name="search"
        value={search}
      />
    </View>
  );
};

export default SearchBar;
