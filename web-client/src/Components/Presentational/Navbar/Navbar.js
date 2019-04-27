import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = props => {
  return (
    <div className="navbar__container">
      <div className="navbar__main">
        <p className="burning-heart__name">Burning Heart</p>
        <nav className="navbar__nav-links">
          <NavLink exact to="/">
            Home
          </NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/signup">Signup</NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
