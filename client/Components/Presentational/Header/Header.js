import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header = _ => {
  return <View style={styles.container} />;
};

const styles = StyleSheet.create({
  container: {
    height: 100,
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    backgroundColor: "transparent"
  }
});

export default Header;
