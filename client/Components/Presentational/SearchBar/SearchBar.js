import React, { useState } from "react";
import { Text, View, TextInput, StyleSheet } from "react-native";

const SearchBar = props => {
  const [search, setSearch] = useState("");
  const handleChange = e => {
    e.preventDefault();
    setSearch(e.target.value);
  };
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Dude"
        onChange={handleChange}
        name="search"
        value={search}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    paddingBottom: 20,
    borderColor: "black",
    borderWidth: 1
  }
});

export default SearchBar;
