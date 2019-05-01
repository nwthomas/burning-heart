import React from "react";
import { connect } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import { logoutApp } from "../../../store/actions";

const Navbar = props => {
  const logout = e => {
    e.preventDefault();
    props.logoutApp();
    localStorage.removeItem("bhToken");
    props.history.push("/home/login");
  };
  return (
    <div className="navbar__container">
      <div className="navbar__main">
        <Link className="burning-heart__name" to="/">
          Burning Heart
        </Link>
        <nav className="navbar__nav-links">
          <NavLink className="navbar__link" exact to="/">
            Home
          </NavLink>
          {/* <NavLink className="navbar__link" to="/about">
            About
          </NavLink> */}
          <NavLink className="navbar__link" to="/home">
            {props.loggedIn ? "Account" : "Login"}
          </NavLink>
          {props.loggedIn ? (
            <p onClick={logout} className="navbar__link logout">
              Logout
            </p>
          ) : (
            <NavLink className="navbar__link" to="/signup">
              Sign Up
            </NavLink>
          )}
        </nav>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  loggedIn: state.loginReducer.loggedIn
});

const mapActionsToProps = {
  logoutApp
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Navbar);
