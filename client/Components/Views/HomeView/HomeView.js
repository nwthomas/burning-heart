import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

const HomeView = props => {
  const { user } = props;
  console.log(user);
  return (
    <View style={styles.container}>
      <View style={styles.profileSummary}>
        <Text style={styles.profileName}>
          {user.username ? user.username : ""}
        </Text>
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
    marginLeft: 15,
    marginRight: 15,
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
    elevation: 3,
    borderRadius: 8
  },
  profileName: {
    fontSize: 20,
    fontFamily: "Roboto-Medium",
    marginTop: 20,
    marginLeft: 20
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

HomeView.defaultProps = {
  username: ""
};

export default HomeView;
