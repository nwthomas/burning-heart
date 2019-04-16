import React from "react";
import { StyleSheet, ScrollView, Text } from "react-native";

const HomeView = props => {
  return (
    <ScrollView style={styles.container}>
      <Text>Dude.</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: "stretch",
    alignContent: "center",
    marginTop: 150
  }
});

HomeView.defaultProps = {
  user: {}
};

export default HomeView;
