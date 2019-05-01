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

/*

To Finish:

1. Build out get account by id/username restricted server endpoint for persistent login

2. Create API call on homepage load if token exists and is valid

3. Connect LoggedIn state with API call process along with user type to conditionally load web client home screen for donors/charities

*/
