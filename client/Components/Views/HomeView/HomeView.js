import React, { useEffect, useContext } from "react";
import { StyleSheet, ScrollView, View, Text, Image } from "react-native";
import { Store } from "../../store/store";
import {
  fetchCharityList,
  fetchAccountDonations
} from "../../store/actions/index";

import boomBoxPerson from "../../../assets/images/boom-box-person.gif";
import { DonationCard } from "../../Presentational/DonationCard";

const HomeView = props => {
  const { state, dispatch } = useContext(Store);
  const { donations, charities, token, account } = state;
  const { firstName, lastName } = account;
  useEffect(() => {
    let token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoyLCJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNTU1NDQ0ODU3LCJleHAiOjE1NTU1MzEyNTd9.z8xmaIeUMsaAhuGfbYbwOTCoah0hFq6KrBGDYVmJcwU";
    let username = "admin";

    // Get data on home page load for speed of user flow later if not already accessed
    if (!donations.length) {
      fetchAccountDonations(account.username, token, dispatch);
    }
    if (!charities.length) {
      fetchCharityList(token, dispatch);
    }
  }, []);
  const hours = new Date().getHours();
  return (
    <View style={styles.container}>
      <View style={styles.homeHeader}>
        <Text style={styles.homeTitle}>Home</Text>
        <Image source={boomBoxPerson} style={styles.homePerson} />
      </View>
      <ScrollView style={styles.homeScrollContainer}>
        <Text style={styles.welcomeText}>
          {hours < 12
            ? `Morning, ${firstName}! Here are your donations:`
            : hours < 19
            ? `Afternoon, ${firstName}! Here are your donations:`
            : `Evening, ${firstName}! Here are your donations:`}
        </Text>
        {donations.map((donation, index) => {
          return <DonationCard donation={donation} key={index} />;
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: "stretch"
  },
  homeHeader: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    marginRight: 40,
    marginLeft: 40,
    alignSelf: "stretch",
    justifyContent: "flex-end",
    alignContent: "flex-end",
    height: 149,
    zIndex: 10
  },
  homeTitle: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 70,
    marginTop: 100,
    fontFamily: "Roboto-Black",
    fontSize: 28,
    color: "#4F68F4"
  },
  homePerson: {
    position: "absolute",
    top: 0,
    right: 0,
    marginTop: 60,
    height: 70,
    width: 70
  },
  homeScrollContainer: {
    marginTop: 150,
    marginBottom: 100,
    paddingLeft: 40,
    paddingRight: 40
  },
  welcomeText: {
    fontFamily: "Roboto-Medium",
    fontSize: 20,
    marginTop: 10
  }
});

HomeView.defaultProps = {
  user: {}
};

export default HomeView;
