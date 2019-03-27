import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { Link, TouchableOpacity } from "react-router-native";

import searchIcon from "../../../assets/images/search-icon.png";
import homeIcon from "../../../assets/images/home-icon.png";
import profileIcon from "../../../assets/images/profile-icon.png";

// Background color for transparent onPress
const linkBackground = "#e9eeef";

const Navbar = _ => {
  return (
    <View style={styles.container}>
      <Link underlayColor={linkBackground} to="/search">
        <Image style={styles.navbarImg} source={searchIcon} />
      </Link>
      <Link underlayColor={linkBackground} exact to="/">
        <Image style={styles.navbarImg} source={homeIcon} />
      </Link>
      <Link underlayColor={linkBackground} to="/profile">
        <Image style={styles.navbarImg} source={profileIcon} />
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    zIndex: 10,
    height: 90,
    paddingTop: 10,
    alignSelf: "stretch",
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 40,
    paddingRight: 40,
    left: 0,
    right: 0,
    bottom: 0,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    borderRadius: 8,
    backgroundColor: "#e9eeef"
  },
  navbarImg: {
    height: 40,
    width: 40,
    backgroundColor: "#e9eeef"
  }
});

export default Navbar;
