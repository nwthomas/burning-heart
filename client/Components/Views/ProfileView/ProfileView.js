import React from "react";
import { View, StatusBar, StyleSheet } from "react-native";

import { ProfileCard } from "../../Presentational/ProfileCard";
import { ContributionsCard } from "../../Presentational/ContributionsCard";
import { CardInformation } from "../../Presentational/CardInformation";

const ProfileView = props => {
  return (
    <View style={styles.profileContainer}>
      <StatusBar backgroundColor="#1A2431" barStyle="light-content" />
      <CardInformation />
      <ContributionsCard />
      <ProfileCard />
    </View>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    flex: 1,
    alignSelf: "stretch"
  }
});

export default ProfileView;
