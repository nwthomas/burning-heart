import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { selectCharityProfile } from "../../store/actions/index";

const CharityCard = ({ charity }) => {
  const selectCharity = index => {
    console.log("Working!");
    // selectCharityProfile(charityName, charities, dispatch);
  };
  return (
    <View onPress={selectCharity} style={styles.cardContainer}>
      <Text style={styles.charityCardText}>{charity.charityName}</Text>
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
  charityCardText: {
    fontFamily: "Roboto-Medium",
    fontSize: 16
  }
});

export default CharityCard;
