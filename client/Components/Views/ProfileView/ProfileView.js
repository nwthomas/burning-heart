import React, { useEffect, useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Store } from "../../store/store";

const ProfileView = props => {
  const { state, dispatch } = useContext(Store);
  const { account } = state;
  return (
    <View style={styles.profileContainer}>
      <Text style={styles.marginTop}>Dude.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    flex: 1,
    alignSelf: "stretch"
  },
  text: {
    marginTop: 150
  }
});

export default ProfileView;
