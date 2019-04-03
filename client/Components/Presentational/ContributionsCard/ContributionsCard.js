import React from "react";
import { View, StyleSheet } from "react-native";

const ContributionsCard = props => {
  return <View style={styles.card} />;
};

const styles = StyleSheet.create({
  card: {
    alignSelf: "stretch",
    height: 470,
    borderBottomLeftRadius: 50,
    backgroundColor: "#1A97F0",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0
  }
});

export default ContributionsCard;
