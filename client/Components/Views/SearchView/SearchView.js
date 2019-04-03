import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { SearchBar } from "../../Presentational/SearchBar";

const SearchView = _ => {
  return (
    <View>
      <SearchBar />
      <Text style={styles.searchText}>This is the search screen.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  searchText: {
    fontFamily: "Roboto-Medium",
    fontSize: 20,
    textAlign: "center"
  }
});

export default SearchView;
