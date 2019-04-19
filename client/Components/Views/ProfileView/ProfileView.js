import React, { useContext } from "react";
import { View, ScrollView, Text, StyleSheet, Image } from "react-native";
import { Store } from "../../store/store";

import boomBoxPerson from "../../../assets/images/boom-box-person.gif";

const ProfileView = props => {
  const { state, dispatch } = useContext(Store);
  const { account, donations } = state;
  const totalDonations = parseFloat(
    donations.reduce((total, accum) => {
      return total + accum.amount;
    }, 0) / 100
  ).toFixed(2);
  return (
    <ScrollView style={styles.accountContainer}>
      <View style={styles.accountHeader}>
        <Text style={styles.accountTitle}>Account</Text>
        <Image source={boomBoxPerson} style={styles.accountPerson} />
      </View>
      <View style={styles.accountWelcomeSummary}>
        <Text style={styles.accountSummaryText}>
          {donations.length
            ? `${
                account.firstName
              }, you've donated $${totalDonations} to charities so far this year.`
            : `${account.firstName}, make your first donation today!`}
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  accountContainer: {
    flex: 1,
    alignSelf: "stretch"
  },
  accountHeader: {
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
  accountTitle: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 70,
    marginTop: 100,
    fontFamily: "Roboto-Black",
    fontSize: 28,
    color: "#4F68F4"
  },
  accountPerson: {
    position: "absolute",
    top: 0,
    right: 0,
    marginTop: 60,
    height: 70,
    width: 70
  },
  accountWelcomeSummary: {
    marginTop: 150,
    marginRight: 40,
    marginLeft: 40,
    paddingBottom: 30
  },
  accountSummaryText: {
    marginTop: 10,
    fontFamily: "Roboto-Medium",
    fontSize: 20,
    lineHeight: 30
  }
});

export default ProfileView;
