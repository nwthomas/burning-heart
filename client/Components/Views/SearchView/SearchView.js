import React from "react";
import { View, Text, StyleSheet } from "react-native";

const SearchView = props => {
  return (
    <View style={styles.searchContainer}>
      <Text style={styles.searchText}>This is the search screen.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flex: 1,
    alignSelf: "stretch"
  }
});

export default SearchView;
