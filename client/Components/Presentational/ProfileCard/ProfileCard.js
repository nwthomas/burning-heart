import React from "react";
import { View, StyleSheet } from "react-native";

const ProfileCard = props => {
  return <View style={styles.card} />;
};

const styles = StyleSheet.create({
  card: {
    alignSelf: "stretch",
    height: 260,
    borderBottomLeftRadius: 60,
    backgroundColor: "#1A2431",
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
  }
});

export default ProfileCard;
