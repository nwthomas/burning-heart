import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ProfileCard = ({ user }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.profileCardTitle}>{`${user.firstName} ${
        user.lastName
      }`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    alignSelf: "stretch",
    justifyContent: "flex-end",
    height: 260,
    paddingBottom: 45,
    paddingLeft: 45,
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
  },
  profileCardTitle: {
    color: "#E9EEEF",
    fontSize: 25,
    fontFamily: "OpenSans-Bold"
  }
});

export default ProfileCard;
