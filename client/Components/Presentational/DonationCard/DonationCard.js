import React from "react";
import { Text, View, StyleSheet } from "react-native";

const DonationCard = ({ donation }) => {
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.donationCardText}>{donation.charityName}</Text>
      <Text style={styles.donationAmount}>{`$${parseFloat(
        donation.amount / 100
      ).toFixed(2)}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    alignSelf: "stretch",
    paddingTop: 30,
    paddingBottom: 30,
    borderBottomColor: "#cacacf",
    borderBottomWidth: 1
  },
  donationCardText: {
    fontFamily: "Roboto-Medium",
    fontSize: 16
  },
  donationAmount: {
    fontFamily: "Roboto-Medium",
    fontSize: 14,
    marginTop: 5
  }
});

export default DonationCard;
