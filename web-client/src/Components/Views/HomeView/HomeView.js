import React, { Component } from "react";
import { connect } from "react-redux";

import { CharityDashboard } from "../../Container/CharityDashboard";
import { DonorDashboard } from "../../Container/DonorDashboard";

const type = "donor";

class HomeView extends Component {
  render() {
    return <>{type === "donor" ? <DonorDashboard /> : <CharityDashboard />}</>;
  }
}

const mapStateToProps = state => ({
  loggedIn: state.loginReducer.loggedIn,
  type: state.loginReducer.account
});

export default connect(
  mapStateToProps,
  {}
)(HomeView);
