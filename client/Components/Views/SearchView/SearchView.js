import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
  TextInput
} from "react-native";
import { Store } from "../../store/store";
import {
  searchCharities,
  selectCharityProfile
} from "../../store/actions/index";

import boomBoxPerson from "../../../assets/images/boom-box-person.gif";
import { CharityCard } from "../../Presentational/CharityCard";

const { width } = Dimensions.get("window"); // Get window dimensions

const SearchView = props => {
  const { state, dispatch } = useContext(Store);
  const { charities, shownCharities, charitySearchInput } = state;

  const handleChange = value => {
    searchCharities(value, charities, dispatch); // Updates charity list shown on screen
  };
  return (
    <View style={styles.searchContainer}>
      <View style={styles.searchHeader}>
        <Text style={styles.searchTitle}>Make Donation</Text>
        <Image source={boomBoxPerson} style={styles.searchPerson} />
      </View>
      <ScrollView style={styles.charityList}>
        <TextInput
          autoFocus={true}
          returnKeyType="done"
          style={styles.input}
          placeholder="Search for charity"
          id="charitySearchInput"
          value={charitySearchInput}
          onChangeText={text => handleChange(text)}
        />
        {shownCharities.length ? (
          shownCharities.map((charity, index) => (
            <CharityCard charity={charity} key={index} />
          ))
        ) : (
          <Text style={styles.noCharities}>
            {charities.length ? "No charities found" : "Something went wrong"}
          </Text>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flex: 1,
    alignSelf: "stretch"
  },
  searchHeader: {
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
  searchTitle: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 70,
    marginTop: 100,
    fontFamily: "Roboto-Black",
    fontSize: 28,
    color: "#4F68F4"
  },
  searchPerson: {
    position: "absolute",
    top: 0,
    right: 0,
    marginTop: 60,
    height: 70,
    width: 70
  },
  charityList: {
    marginTop: 150,
    marginBottom: 100,
    paddingLeft: 40,
    paddingRight: 40
  },
  input: {
    marginTop: 10,
    width: width - 80,
    fontFamily: "Roboto-Medium",
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#cacacf",
    borderRadius: 5,
    height: 45,
    paddingLeft: 5
  },
  noCharities: {
    marginTop: 30,
    fontFamily: "Roboto-Medium",
    fontSize: 16,
    color: "#cacacf"
  }
});

export default SearchView;
