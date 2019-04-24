import React, { useContext } from "react";
import { View, Text, ScrollView, StyleSheet, Image } from "react-native";
import { Link } from "react-router-native";
import { Store } from "../../store/store";

import boomBoxPerson from "../../../assets/images/boom-box-person.gif";

const CharityProfile = ({ history, match }) => {
  const { state, dispatch } = useContext(Store);
  const { charities } = state;
  const selectedCharity = charities.filter(charity => {
    return charity.id == match.params.id ? true : false; // Coercive equality as params.id is a string
  });
  return (
    <View style={styles.donateContainer}>
      <View style={styles.donateHeader}>
        <Text style={styles.donateTitle}>Charity Profile</Text>
        <Image source={boomBoxPerson} style={styles.donatePerson} />
      </View>
      <ScrollView style={styles.donateScroll}>
        <Text style={styles.donateSubHeader}>Charity Name</Text>
        <Text style={styles.donateText}>{selectedCharity[0].charityName}</Text>
        <Text style={styles.donateSubHeader}>Phone Number</Text>
        <Text style={styles.donateText}>{selectedCharity[0].phone}</Text>
        <Text style={styles.donateSubHeader}>Street</Text>
        <Text style={styles.donateText}>{selectedCharity[0].street1}</Text>
        <Text style={styles.donateSubHeader}>City</Text>
        <Text style={styles.donateText}>{selectedCharity[0].city}</Text>
        <Text style={styles.donateSubHeader}>State</Text>
        <Text style={styles.donateText}>{selectedCharity[0].state}</Text>
        <Text style={styles.donateSubHeader}>Zip</Text>
        <Text style={styles.donateText}>{selectedCharity[0].zip}</Text>
        <Link
          to={`/search/profile/${match.params.id}/donate`}
          style={styles.donateProfileBtn}
        >
          <Text style={styles.donateBtnText}>Donate</Text>
        </Link>
        <Link to="/search" style={styles.donateProfileBtn}>
          <Text style={styles.donateBtnText}>Cancel</Text>
        </Link>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  donateContainer: {
    flex: 1,
    alignSelf: "stretch"
  },
  donateHeader: {
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
  donateTitle: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 70,
    marginTop: 100,
    fontFamily: "Montserrat-Bold",
    fontSize: 28,
    color: "#4F68F4"
  },
  donatePerson: {
    position: "absolute",
    top: 0,
    right: 0,
    marginTop: 60,
    height: 70,
    width: 70
  },
  donateScroll: {
    marginTop: 160,
    marginBottom: 100,
    paddingLeft: 40,
    paddingRight: 40
  },
  donateSubHeader: {
    color: "#4F68F4",
    fontFamily: "Montserrat-Bold",
    fontSize: 16,
    marginBottom: 10
  },
  donateText: {
    fontFamily: "OpenSans-Regular",
    lineHeight: 30,
    fontSize: 16,
    marginBottom: 20
  },
  donateProfileBtn: {
    alignSelf: "stretch",
    justifyContent: "center",
    height: 45,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#0E30F0",
    backgroundColor: "#0E30F0",
    marginBottom: 20
  },
  donateBtnText: {
    color: "#ffffff",
    alignSelf: "center",
    fontFamily: "Montserrat-Medium",
    fontSize: 16
  }
});

export default CharityProfile;
