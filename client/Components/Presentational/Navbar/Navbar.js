import React from "react";
import { StyleSheet } from "react-native";
import styled from "styled-components/native";
import { Link, TouchableOpacity } from "react-router-native";

import searchIcon from "../../../assets/images/search-icon.png";
import homeIcon from "../../../assets/images/home-icon.png";
import profileIcon from "../../../assets/images/profile-icon.png";

const NavbarContainer = styled.View`
  z-index: 10;
  height: 90;
  padding-top: 10;
  align-self: stretch;
  position: absolute;
  flex-direction: row;
  justify-content: space-around;
  left: 0;
  right: 0;
  bottom: 0;
`;

const NavbarImage = styled.Image`
  height: 40;
  width: 40;
  background: #e9eeef;
`;

// Background color for transparent onPress
const linkBackground = "#e9eeef";

const Navbar = _ => {
  return (
    <NavbarContainer>
      <Link underlayColor={linkBackground} to="/search">
        <NavbarImage source={searchIcon} />
      </Link>
      <Link underlayColor={linkBackground} exact to="/">
        <NavbarImage source={homeIcon} />
      </Link>
      <Link underlayColor={linkBackground} to="/profile">
        <NavbarImage source={profileIcon} />
      </Link>
    </NavbarContainer>
  );
};

export default Navbar;
