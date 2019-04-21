import React from "react";

import fireGif from "../../../images/fire.gif";

const NavbarMain = props => {
  return (
    <nav className="navbar__main">
      <div className="navbar__image">
        <img src={fireGif} alt="Burning Heart animated pixel logo" />
      </div>
      <div className="button__container">
        <button className="navbar__button" href="#">
          Login
        </button>
        <button className="navbar__button navbar__button-signup " href="#">
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default NavbarMain;
