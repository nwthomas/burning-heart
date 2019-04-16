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
import { searchCharities } from "../../store/actions/index";

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
      <View style={styles.loginHeader}>
        <Text style={styles.loginTitle}>Select Charity</Text>
        <Image source={boomBoxPerson} style={styles.loginPerson} />
      </View>
      <ScrollView style={styles.charityList}>
        <TextInput
          returnKeyType="done"
          style={styles.input}
          placeholder="Search for a charity"
          id="charitySearchInput"
          value={charitySearchInput}
          onChangeText={text => handleChange(text)}
        />
        {shownCharities.map((charity, index) => {
          return <CharityCard charity={charity} key={index} />;
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flex: 1,
    alignSelf: "stretch"
  },
  loginHeader: {
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
  loginTitle: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 70,
    marginTop: 100,
    fontFamily: "Roboto-Black",
    fontSize: 28,
    color: "#4F68F4"
  },
  loginPerson: {
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
  }
});

export default SearchView;
