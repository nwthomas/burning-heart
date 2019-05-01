import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import { logoutApp } from "../../../store/actions";

import { CtaBanner } from "../../Presentational/CtaBanner";
import ivyPicture from "../../../images/ivy-picture.jpg";
import closeNavbarIcon from "../../../images/menu-icon-close.svg";
import openNavbarIcon from "../../../images/menu-icon-open.svg";

class AboutPage extends Component {
  state = {
    navbarOpen: false
  };
  render() {
    return (
      <>
        <CtaBanner />
        <header className="about-page__header">
          <div className="page-page__header__bg" />
          <nav
            className={
              this.state.navbarOpen
                ? "header__navbar header__navbar--open"
                : "header__navbar"
            }
          >
            <Link
              className={
                this.state.navbarOpen
                  ? "burning-heart__name burning-heart__name--open"
                  : "burning-heart__name"
              }
              to="/"
            >
              Burning Heart
            </Link>
            <div
              onClick={this.handleNavbar}
              className={
                this.state.navbarOpen
                  ? "navbar__hamburger navbar__hamburger--open"
                  : "navbar__hamburger"
              }
            >
              <img
                src={this.state.navbarOpen ? closeNavbarIcon : openNavbarIcon}
                alt="navbar__menu__icon"
              />
            </div>
            <div
              className={
                this.state.navbarOpen
                  ? "navbar__links navbar__links--open"
                  : "navbar__links"
              }
            >
              <NavLink className="navbar__link" to="/">
                Home
              </NavLink>
              <NavLink className="navbar__link" to="/about">
                About
              </NavLink>
              <NavLink className="navbar__link" to="/home">
                {this.props.loggedIn ? "Account" : "Login"}
              </NavLink>
              {this.props.loggedIn ? (
                <p onClick={this.logout} className="navbar__link logout">
                  Logout
                </p>
              ) : (
                <NavLink className="navbar__link" to="/signup">
                  Sign Up
                </NavLink>
              )}
            </div>
          </nav>
          <div className="header__banner">
            <div className="header__image">
              <img src={ivyPicture} alt="Ivy photograph" />
            </div>
            <div className="header__content">
              <h2>For Those Who Like to Give</h2>
              <p>Burning Heart lets you donate what you want, when you want.</p>
              <p>Do what feels good. Do what makes you happy. Give.</p>
              <button className="header__button">Download</button>
            </div>
          </div>
        </header>
      </>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.loginReducer.loggedIn
});

const mapActionsToProps = {
  logoutApp
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(AboutPage);
