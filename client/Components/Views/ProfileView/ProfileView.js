import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ProfileView = props => {
  return (
    <View home={props.history}>
      <Text style={styles.profileText}>This is the profile screen.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  profileText: {
    fontFamily: "Roboto-Medium",
    fontSize: 20
  }
});

export default ProfileView;
