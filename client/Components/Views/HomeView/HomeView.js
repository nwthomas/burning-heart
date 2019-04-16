import React, { useEffect, useContext } from "react";
import { StyleSheet, ScrollView, Text } from "react-native";
import { Store } from "../../store/store";
import {
  fetchCharityList,
  fetchAccountDonations
} from "../../store/actions/index";

const HomeView = props => {
  const { state, dispatch } = useContext(Store);
  const { donations, charities, token, account } = state;

  useEffect(() => {
    console.log(donations, charities);
    // Get data on home page load for speed of user flow later if not already accessed

    let token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoyLCJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNTU1NDQ0ODU3LCJleHAiOjE1NTU1MzEyNTd9.z8xmaIeUMsaAhuGfbYbwOTCoah0hFq6KrBGDYVmJcwU";
    let username = "admin";

    if (!donations.length) {
      fetchAccountDonations(account.username, token, dispatch);
    }
    if (!charities.length) {
      fetchCharityList(token, dispatch);
    }
  }, []);
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
