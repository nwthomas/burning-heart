import React, { Component } from "react";
import { connect } from "react-redux";
import {
  fetchCharities,
  fetchAccountDonations,
  selectDonationsList,
  selectCharitiesList
} from "../../../store/actions";

import { DonationCard } from "../../Presentational/DonationCard";
import { CharityCard } from "../../Presentational/CharityCard";

class DonorDashboard extends Component {
  componentDidMount() {
    if (!this.props.donations.length) this.props.fetchAccountDonations();
    if (!this.props.charities.length) this.props.fetchCharities();
  }

  selectDonations = e => {
    e.preventDefault();
    this.props.selectDonationsList();
  };

  selectCharities = e => {
    e.preventDefault();
    this.props.selectCharitiesList();
  };

  render() {
    const hours = new Date().getHours();
    const account = this.props.account;
    return (
      <div className="donor-dashboard__container">
        <section className="donations__charities">
          <div className="donor__select__buttons">
            <button
              className={
                this.props.selectDonations
                  ? "donor__button donor__button--open"
                  : "donor__button"
              }
              type="button"
              onClick={this.selectDonations}
            >
              Past Donations
            </button>
            <button
              className={
                this.props.selectCharities
                  ? "donor__button donor__button--open"
                  : "donor__button"
              }
              type="button"
              onClick={this.selectCharities}
            >
              Donate to Charity
            </button>
          </div>
          {this.props.selectDonations &&
            this.props.donations.map(donation => {
              return <DonationCard key={donation.id} donation={donation} />;
            })}
          {this.props.selectCharities &&
            this.props.charities.map(charity => {
              return <CharityCard key={charity.id} charity={charity} />;
            })}
        </section>
        <section className="donor__account">
          <h2 className="donor__account__title">Account</h2>
          <p className="donor__account__summary">
            {hours < 12
              ? `Good morning, ${
                  account.firstName
                }! Here's your account details:`
              : hours < 19
              ? `Good afternoon, ${
                  account.firstName
                }! Here's your account details:`
              : `Good evening, ${
                  account.firstName
                }! Here's your account details:`}
          </p>
          <p className="donor__details--emphasis">
            Username: <span className="donor__details">{account.username}</span>
          </p>
          <p className="donor__details--emphasis">
            First Name:{" "}
            <span className="donor__details">{account.firstName}</span>
          </p>
          <p className="donor__details--emphasis">
            Middle Name:{" "}
            <span className="donor__details">{account.middleName}</span>
          </p>
          <p className="donor__details--emphasis">
            Last Name:{" "}
            <span className="donor__details">{account.lastName}</span>
          </p>
          <p className="donor__details--emphasis">
            Email: <span className="donor__details">{account.email}</span>
          </p>
          <p className="donor__details--emphasis">
            Phone: <span className="donor__details">{account.phone}</span>
          </p>
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  account: state.loginReducer.account,
  selectCharities: state.donorReducer.selectCharities,
  selectDonations: state.donorReducer.selectDonations,
  donations: state.donorReducer.donations,
  charities: state.donorReducer.charities
});

const mapActionsToProps = {
  fetchCharities,
  fetchAccountDonations,
  selectDonationsList,
  selectCharitiesList
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(DonorDashboard);

/*

Next steps:

3. Build payment process for individual charity

4. Refactor Charities table to have username/password + seed data

5. Refactor charitiesModel to not return password

6. Build out charity sign-up process for new account and Stripe

7. Build out simple charity dashboard with donation amounts and account update

8. Web client Jest tests

9. Finalize marketing plan

*/
