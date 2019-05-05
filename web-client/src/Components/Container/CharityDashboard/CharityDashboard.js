import React, { Component } from "react";
import { connect } from "react-redux";

import { FurtherCharitySignup } from "../FurtherCharitySignup";

class CharityDashboard extends Component {
  render() {
    return (
      <div className="charity-dashboard__container">
        {this.props.charity.ownerAdded && this.props.charity.termsAccepted ? (
          <p>Dude.</p>
        ) : (
          <FurtherCharitySignup history={this.props.history} />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  charity: state.loginReducer.charity
});

export default connect(
  mapStateToProps,
  {}
)(CharityDashboard);
