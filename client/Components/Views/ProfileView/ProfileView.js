import React, { useEffect, useContext } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { Store } from "../../store/store";

const ProfileView = props => {
  const { state, dispatch } = useContext(Store);
  const { account } = state;
  return (
    <View style={styles.profileContainer}>
      <ScrollView />
    </View>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    flex: 1,
    alignSelf: "stretch"
  },
  charityList: {
    flex: 1,
    alignSelf: "stretch"
  }
});

export default ProfileView;
