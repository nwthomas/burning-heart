import React from "react";
import { Text, View, StyleSheet } from "react-native";

const ContributionsCard = props => {
  return (
    <View style={styles.card}>
      <Text style={styles.totalDonationsCardTitle}>Total Donations</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    alignSelf: "stretch",
    height: 470,
    justifyContent: "flex-end",
    paddingBottom: 45,
    paddingLeft: 45,
    borderBottomLeftRadius: 60,
    backgroundColor: "#1A97F0",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1
  },
  totalDonationsCardTitle: {
    color: "#E9EEEF",
    fontSize: 25,
    fontFamily: "Roboto-Black"
  }
});

export default ContributionsCard;
