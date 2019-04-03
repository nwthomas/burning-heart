import React from "react";
import { View, StyleSheet } from "react-native";

const CardInformation = props => {
  return <View style={styles.card} />;
};

const styles = StyleSheet.create({
  card: {
    alignSelf: "stretch",
    height: 680,
    borderBottomLeftRadius: 50,
    backgroundColor: "#6DBCF5",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0
  }
});

export default CardInformation;
