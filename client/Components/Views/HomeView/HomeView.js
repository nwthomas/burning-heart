import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

const HomeView = props => {
  return (
    <View style={styles.container}>
      <View style={styles.profileSummary}>
        <Text style={styles.profileName}>Nathan Thomas</Text>
      </View>
      <ScrollView style={styles.scrollView} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: "stretch"
  },
  profileSummary: {
    zIndex: 10,
    height: 230,
    marginTop: 70,
    marginLeft: 10,
    marginRight: 10,
    alignSelf: "stretch",
    position: "absolute",
    flex: 1,
    left: 0,
    right: 0,
    top: 0,
    backgroundColor: "#e9eeef",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3
  },
  profileName: {
    fontSize: 20,
    fontFamily: "Ubuntu-Medium"
  },
  scrollView: {
    zIndex: 10,
    height: 800,
    marginTop: 70,
    marginLeft: 10,
    marginRight: 10,
    alignSelf: "stretch",
    position: "absolute",
    flex: 1,
    backgroundColor: "grey"
  }
});

export default HomeView;
