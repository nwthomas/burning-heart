import React from "react";
import { View, StatusBar, StyleSheet } from "react-native";

const ProfileView = ({ user }) => {
  return <View style={styles.profileContainer} />;
};

const styles = StyleSheet.create({
  profileContainer: {
    flex: 1,
    alignSelf: "stretch"
  }
});

export default ProfileView;
