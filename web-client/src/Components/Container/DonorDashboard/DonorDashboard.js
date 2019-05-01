import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCharities, fetchAccountDonations } from "../../../store/actions";

class DonorDashboard extends Component {
  componentDidMount() {
    if (!this.props.donations.length) this.props.fetchAccountDonations();
    if (!this.props.charities.length) this.props.fetchCharities();
  }

  selectDonations = e => {
    e.preventDefault();
  };

  selectCharities = e => {
    e.preventDefault();
  };

  render() {
    return (
      <div className="donor-dashboard__container">
        <section className="donor__charities">
          <div className="donor__select__buttons">
            <button
              className="donor__button"
              type="button"
              onClick={this.selectDonations}
            >
              Past Donations
            </button>
            <button
              className="donor__button"
              type="button"
              onClick={this.selectCharities}
            >
              Donate to Charity
            </button>
          </div>
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
  account: state.loginReducer.account,
  selectCharities: state.donorReducer.selectCharities,
  selectDonations: state.donorReducer.selectDonations,
  donations: state.donorReducer.donations,
  charities: state.donorReducer.charities
});

const mapActionsToProps = {
  fetchCharities,
  fetchAccountDonations
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(DonorDashboard);

/*

Next steps:

1. Finish call on login and on refresh for charities/donations

2. Build out display cards for charities and donations

3. Build payment process for individual charity

4. Refactor Charities table to have username/password + seed data

5. Refactor charitiesModel to not return password

6. Build out charity sign-up process for new account and Stripe

7. Build out simple charity dashboard with donation amounts and account update

8. Web client Jest tests

9. Finalize marketing plan

*/
