import React, { Component } from "react";
import { connect } from "react-redux";

class DonorDashboard extends Component {
  render() {
    return (
      <div className="donor-dashboard__container">
        <section className="donor__charities">
          <h2>Select a Charity</h2>
        </section>
        <section className="donor__account">
          <h2>Account</h2>
          <p>
            Welcome {this.props.account.firstName}. Here are your donations:
          </p>
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  account: state.loginReducer.account
});

export default connect(
  mapStateToProps,
  {}
)(DonorDashboard);
