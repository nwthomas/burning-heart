import React, { Component } from "react";

import { CtaBanner } from "../../Presentational/CtaBanner";

import volcanoPicture from "../../../images/landing-page-image.webp";
import fireGif from "../../../images/fire.gif";
import blankIphone from "../../../images/blank-iphone.webp";

export default class LandingPage extends Component {
  render() {
    return (
      <>
        <CtaBanner />
        <header className="landing-page__header">
          <div className="landing-page__header__bg" />
          <nav className="header__navbar">
            <h1 className="burning-heart__name">Burning Heart</h1>
            <div className="navbar__links">
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
          <div className="demo__information">
            <div className="demo__content">
              <h2 className="demo__header">A new way to give.</h2>
              <p className="demo__text">
                People are busy. It's hard to make time to help others. Burning
                Heart makes it easy by putting the power of micro-donations in
                the palm of your hand.
              </p>
            </div>
            <div className="iphone__picture">
              <img src={blankIphone} alt="iPhone demo of Burning Heart" />
              <img className="fire-gif" src={fireGif} alt="Fire logo" />
            </div>
          </div>
        </section>
      </>
    );
  }
}
