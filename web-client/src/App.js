import React, { Component } from "react";
import { Route } from "react-router";
import "./Components/styles/App.scss";
import { connect } from "react-redux";
import {
  loginWithToken,
  fetchCharities,
  fetchAccountDonations
} from "./store/actions";

import { LandingPage } from "./Components/Views/LandingPage";
import { WebClient } from "./Components/Views/WebClient";
import { SignUpForm } from "./Components/Container/SignUpForm";
import { AboutPage } from "./Components/Views/AboutPage";

class App extends Component {
  componentDidMount() {
    if (this.props.loggedIn) {
      this.props.loginWithToken();
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.account !== this.props.account && this.props.loggedIn) {
      if (!this.props.donations.length) this.props.fetchAccountDonations();
      if (!this.props.charities.length) this.props.fetchCharities();
    }
  }
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={LandingPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/home" component={WebClient} />
        <Route
          path="/signup"
          component={SignUpForm}
          history={this.props.history}
        />
      </div>
    );
  }
}

const mapActionsToProps = {
  loginWithToken,
  fetchCharities,
  fetchAccountDonations
};

const mapStateToProps = state => ({
  loggedIn: state.loginReducer.loggedIn,
  account: state.loginReducer.account,
  donations: state.donorReducer.donations,
  charities: state.donorReducer.charities
});

export default connect(
  mapStateToProps,
  mapActionsToProps
)(App);
