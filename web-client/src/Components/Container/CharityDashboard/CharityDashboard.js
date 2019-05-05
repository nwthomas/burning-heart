import React, { Component } from "react";
import { connect } from "react-redux";

import { FurtherCharitySignup } from "../FurtherCharitySignup";
import { CharityDonationCard } from "../../Presentational/CharityDonationCard";

class CharityDashboard extends Component {
  render() {
    return (
      <div className="charity-dashboard__container">
        {this.props.charity.ownerAdded && this.props.charity.termsAccepted ? (
          <>
            <div className="charity-dashboard__card">
              <h2 className="charity-dashboard__header">Recent Donations:</h2>
              {this.props.charityDonations.map(donation => {
                return (
                  <CharityDonationCard donation={donation} key={donation.id} />
                );
              })}
            </div>
            <div className="charity-dashboard__card">
              <h2 className="charity-dashboard__header">
                Charity Account Details:
              </h2>
              <p className="charity-account__details">
                <span>Charity Name: </span>
                {this.props.charity.charityName}
              </p>
              <p className="charity-account__details">
                <span>Username: </span>
                {this.props.charity.username}
              </p>
              <p className="charity-account__details">
                <span>Phone: </span>
                {this.props.charity.phone}
              </p>
              <p className="charity-account__details">
                <span>Street: </span>
                {this.props.charity.street1}
              </p>
              <p className="charity-account__details">
                <span>City: </span>
                {this.props.charity.city}
              </p>
              <p className="charity-account__details">
                <span>Postal Code: </span>
                {this.props.charity.zip}
              </p>
            </div>
          </>
        ) : (
          <FurtherCharitySignup history={this.props.history} />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  charity: state.loginReducer.charity,
  charityDonations: state.charityReducer.charityDonations
});

export default connect(
  mapStateToProps,
  {}
)(CharityDashboard);
