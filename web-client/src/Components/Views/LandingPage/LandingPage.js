import React, { Component } from "react";

import { CtaBanner } from "../../Presentational/CtaBanner";

import volcanoPicture from "../../../images/landing-page-image.jpg";
import fireGif from "../../../images/fire.gif";
import blankIphone from "../../../images/blank-iphone.png";
import facebookLogo from "../../../images/facebook.svg";
import instagramLogo from "../../../images/instagram.svg";
import twitterLogo from "../../../images/twitter.svg";
import linkedInLogo from "../../../images/linkedin.svg";
import closeNavbarIcon from "../../../images/menu-icon-close.svg";
import openNavbarIcon from "../../../images/menu-icon-open.svg";

class LandingPage extends Component {
  state = {
    navbarOpen: false
  };
  componentDidMount() {
    document.addEventListener("scroll", this.scrollChange);
  }
  componentWillUnmount() {
    document.removeEventListener("scroll", this.scrollChange);
  }
  handleNavbar = e => {
    e.preventDefault();
    this.setState(prevState => ({
      navbarOpen: !prevState.navbarOpen
    }));
    const body = document.querySelector("body");
    body.classList.toggle("stopScroll");
    if (!this.state.navbarOpen) {
      return (document.ontouchmove = e => e.preventDefault());
    } else {
      return (document.ontouchmove = e => true);
    }
  };
  render() {
    return (
      <>
        <CtaBanner />
        <header className="landing-page__header">
          <div className="landing-page__header__bg" />
          <nav
            className={
              this.state.navbarOpen
                ? "header__navbar header__navbar--open"
                : "header__navbar"
            }
          >
            <h1
              className={
                this.state.navbarOpen
                  ? "burning-heart__name burning-heart__name--open"
                  : "burning-heart__name"
              }
            >
              Burning Heart
            </h1>
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
                alt="Navbar__menu__icon"
              />
            </div>
            <div
              className={
                this.state.navbarOpen
                  ? "navbar__links navbar__links--open"
                  : "navbar__links"
              }
            >
              <a href="#">Home</a>
              <a href="#">About</a>
              <a href="#">Login</a>
              <a href="#">Sign Up</a>
            </div>
          </nav>
          <div className="header__banner">
            <div className="header__image">
              <img src={volcanoPicture} alt="Smoking volcano photograph" />
            </div>
            <div className="header__content">
              <h2>For Those Who Like to Give</h2>
              <p>Burning Heart lets you donate what you want, when you want.</p>
              <p>Do what feels good. Do what makes you happy. Give.</p>
              <button className="header__button">Download</button>
            </div>
          </div>
        </header>
        <section className="middle__content">
          <div className="mobile__bg" />
          <div className="demo__information">
            <div className="demo__content">
              <h2 className="demo__header">A new way to give.</h2>
              <p className="demo__text">
                People are busy. We get it. It's hard to make time to help
                others. Burning Heart makes it easy by putting the power of
                micro-donations in the palm of your hand.
              </p>
            </div>
            <div className="iphone__picture">
              <img src={blankIphone} alt="iPhone demo of Burning Heart" />
              <img className="fire-gif" src={fireGif} alt="Fire logo" />
            </div>
          </div>
        </section>
        <footer className="footer__content">
          <div className="logo__address">
            <div className="footer__logo-name">
              <h2>Burning Heart</h2>
            </div>
            <address>
              <p>1 (800) 843-2910</p>
              <p>1400 Oakwood Avenue</p>
              <p>San Francisco, CA</p>
              <p>94574</p>
            </address>
          </div>
          <div className="footer__social__navbar">
            <nav className="footer__navbar__links">
              <a href="#">Home</a>
              <a href="#">About</a>
              <a href="#">Login</a>
              <a href="#">Sign Up</a>
            </nav>
            <div className="footer__social__links">
              <div className="social__link">
                <a href="https://www.facebook.com/nwthomas">
                  <img src={facebookLogo} alt="Facebook logo" />
                </a>
              </div>
              <div className="social__link">
                <a href="https://www.instagram.com/nwthomas/">
                  <img src={instagramLogo} alt="Instagram logo" />
                </a>
              </div>
              <div className="social__link">
                <a href="https://twitter.com/nwthomas_">
                  <img src={twitterLogo} alt="Twitter logo" />
                </a>
              </div>
              <div className="social__link">
                <a href="https://www.linkedin.com/in/nwthomas-profile/">
                  <img src={linkedInLogo} alt="LinkedIn logo" />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  }
}

export default LandingPage;
