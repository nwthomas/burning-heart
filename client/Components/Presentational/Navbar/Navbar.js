import React from "react";
import styled from "styled-components/native";
import { Link } from "react-router-native";

import searchIcon from "../../../assets/icons/search-icon.png";
import homeIcon from "../../../assets/icons/home-icon.png";
import profileIcon from "../../../assets/icons/profile-icon.png";

const NavbarContainer = styled.View`
  z-index: 10;
  border-color: #7a7a7a;
  border-width: 1;
  border-left-color: transparent;
  border-right-color: transparent;
  border-bottom-color: transparent;
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
`;

const Navbar = _ => {
  return (
    <NavbarContainer>
      <Link to="/search">
        <NavbarImage source={searchIcon} />
      </Link>
      <Link exact to="/">
        <NavbarImage source={homeIcon} />
      </Link>
      <Link to="/profile">
        <NavbarImage source={profileIcon} />
      </Link>
    </NavbarContainer>
  );
};

export default Navbar;
