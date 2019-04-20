import React, { useContext } from "react";
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Image,
  ActivityIndicator
} from "react-native";
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
    <View style={styles.accountContainer}>
      <View style={styles.accountHeader}>
        <Text style={styles.accountTitle}>Account</Text>
        <Image source={boomBoxPerson} style={styles.accountPerson} />
      </View>
      <ScrollView style={styles.accountWelcomeSummary}>
        <View style={styles.accountSummaryBox}>
          <Text style={styles.accountSummaryText}>
            {donations.length
              ? `${
                  account.firstName
                }, you've donated $${totalDonations} to charities so far this year.`
              : `${account.firstName}, make your first donation today!`}
          </Text>
        </View>
        <Text style={styles.profileSubHeader}>Username</Text>
        <Text style={styles.profileText}>{account.username}</Text>
        <Text style={styles.profileSubHeader}>First Name</Text>
        <Text style={styles.profileText}>{account.firstName}</Text>
        <Text style={styles.profileSubHeader}>Middle Name</Text>
        <Text style={styles.profileText}>{account.middleName}</Text>
        <Text style={styles.profileSubHeader}>Last Name</Text>
        <Text style={styles.profileText}>{account.lastName}</Text>
        <Text style={styles.profileSubHeader}>Email</Text>
        <Text style={styles.profileText}>{account.email}</Text>
        <Text style={styles.profileSubHeader}>Phone Number</Text>
        <Text style={styles.profileText}>{account.phone}</Text>
      </ScrollView>
    </View>
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
  },
  accountSummaryBox: {
    paddingBottom: 30
  },
  profileInfo: {
    paddingTop: 30,
    borderBottomWidth: 1,
    borderBottomColor: "#cacacf",
    fontFamily: "Roboto-Medium",
    fontSize: 16
  },
  profileInfoTitle: {
    fontFamily: "Roboto-Medium",
    fontSize: 2,
    marginBottom: 30
  },
  profileInfoText: {
    fontFamily: "Roboto-Medium",
    fontSize: 16,
    marginBottom: 30
  },
  profileInfoTextBold: {
    fontFamily: "Roboto-BoldItalic",
    fontSize: 16
  },
  profileSubHeader: {
    color: "#4F68F4",
    fontFamily: "Roboto-Medium",
    fontSize: 16,
    marginBottom: 10
  },
  profileText: {
    fontFamily: "Roboto-Medium",
    lineHeight: 30,
    fontSize: 16,
    marginBottom: 20
  }
});

export default ProfileView;
