import React from "react";
import { View, Text, StyleSheet } from "react-native";

const DonationCard = ({ donation }) => {
  return (
    <View style={styles.donationBox}>
      <Text style={styles.donationText}>To</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  donationBox: {
    flex: 2,
    alignSelf: "stretch",
    backgroundColor: "#ec3323",
    height: 60,
    marginLeft: 40,
    marginTop: 30,
    borderBottomLeftRadius: 50,
    borderTopLeftRadius: 50,
    justifyContent: "center"
  },
  donationText: {
    color: "#ffffff",
    marginLeft: 20,
    fontSize: 20,
    fontFamily: "Roboto-Medium"
  },
  donations: {
    // finish
  }
});

export default DonationCard;
