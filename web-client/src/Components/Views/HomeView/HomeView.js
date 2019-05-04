import React, { Component } from "react";
import { connect } from "react-redux";

import { CharityDashboard } from "../../Container/CharityDashboard";
import { DonorDashboard } from "../../Container/DonorDashboard";
import { PaymentModal } from "../../Presentational/Modals";

class HomeView extends Component {
  render() {
    return (
      <div className="home-view__container">
        {this.props.showPaymentModal && (
          <PaymentModal history={this.props.history} />
        )}
        {this.props.type === "donor" ? (
          <DonorDashboard />
        ) : (
          <CharityDashboard />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.loginReducer.loggedIn,
  type: state.loginReducer.accountType,
  showPaymentModal: state.donorReducer.showPaymentModal
});

export default connect(
  mapStateToProps,
  {}
)(HomeView);
