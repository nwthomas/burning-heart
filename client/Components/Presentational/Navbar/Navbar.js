import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { Link } from "react-router-native";

import searchIcon from "../../../assets/images/search-icon.png";
import searchIconSelected from "../../../assets/images/search-icon-selected.png";
import homeIcon from "../../../assets/images/home-icon.png";
import homeIconSelected from "../../../assets/images/home-icon-selected.png";
import profileIcon from "../../../assets/images/profile-icon.png";
import profileIconSelected from "../../../assets/images/profile-icon-selected.png";

const Navbar = ({ history }) => {
  return (
    <View style={styles.container}>
      <Link underlayColor={"#ffffff"} to="/search">
        <Image
          style={styles.navbarImg}
          source={history === "/search" ? searchIconSelected : searchIcon}
        />
      </Link>
      <Link underlayColor={"#ffffff"} exact to="/">
        <Image
          style={styles.navbarImg}
          source={history === "/" ? homeIconSelected : homeIcon}
        />
      </Link>
      <Link underlayColor={"#ffffff"} to="/profile">
        <Image
          style={styles.navbarImg}
          source={history === "/profile" ? profileIconSelected : profileIcon}
        />
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
    backgroundColor: "#ffffff"
  },
  navbarImg: {
    height: 40,
    width: 40,
    backgroundColor: "#ffffff"
  }
});

export default Navbar;
