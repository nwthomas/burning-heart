import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Link } from "react-router-native";

const CharityCard = ({ charity }) => {
  return (
    <Link to={`/search/profile/${charity.id}`}>
      <View style={styles.cardContainer}>
        <Text style={styles.charityCardText}>{charity.charityName}</Text>
      </View>
    </Link>
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
