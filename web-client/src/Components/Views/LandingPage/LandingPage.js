import React, { Component } from "react";

import { CtaBanner } from "../../Presentational/CtaBanner";

import volcanoPicture from "../../../images/landing-page-image.webp";
import fireGif from "../../../images/fire.gif";

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
              <p>Burning Heart lets you give what you want, when you want. </p>
              <p>Do what feels good. Give.</p>
              <button className="header__button">Download</button>
            </div>
          </div>
        </header>
      </>
    );
  }
}
