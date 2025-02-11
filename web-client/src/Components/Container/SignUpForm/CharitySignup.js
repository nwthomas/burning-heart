import React, { Component } from "react";
import { connect } from "react-redux";
import {
  createCharityAccount,
  previousSignupPage,
  handleCharityFormChanges
} from "../../../store/actions";

class CharitySignup extends Component {
  createNewCharity = e => {
    e.preventDefault();
    const creds = {
      ...this.props.charityAccount,
      username: this.props.username,
      password: this.props.password
    };
    this.props.createCharityAccount(creds);
  };
  handleCharityForm = e => {
    this.props.handleCharityFormChanges(e.target.name, e.target.value);
  };
  previousSignupForm = e => {
    e.preventDefault();
    this.props.previousSignupPage();
  };
  render() {
    return (
      <form className="signup-form" onSubmit={this.createNewCharity}>
        <h2 className="signup-form__header no__bottom__margin">
          Create Charity Account
        </h2>
        <p className="signup_note">
          Contact Burning Heart for any signup issues.
        </p>
        <input
          className="signup__input"
          required
          type="text"
          placeholder="Charity name"
          id="charityName"
          autoComplete="off"
          name="charityName"
          value={this.props.charityAccount.charityName}
          onChange={this.handleCharityForm}
        />
        <input
          className="signup__input"
          required
          type="text"
          placeholder="Email"
          id="email"
          autoComplete="off"
          name="email"
          value={this.props.charityAccount.email}
          onChange={this.handleCharityForm}
        />
        <input
          className="signup__input"
          required
          type="text"
          placeholder="Phone number"
          id="phone"
          autoComplete="off"
          name="phone"
          value={this.props.charityAccount.phone}
          onChange={this.handleCharityForm}
        />
        <input
          className="signup__input"
          required
          type="text"
          placeholder="Street 1"
          id="street1"
          autoComplete="off"
          name="street1"
          value={this.props.charityAccount.street1}
          onChange={this.handleCharityForm}
        />
        <input
          className="signup__input"
          required
          type="text"
          placeholder="City"
          id="city"
          autoComplete="off"
          name="city"
          value={this.props.charityAccount.city}
          onChange={this.handleCharityForm}
        />
        <input
          className="signup__input"
          required
          type="text"
          placeholder="State (i.e. CA, TN, etc.)"
          id="state"
          autoComplete="off"
          name="state"
          value={this.props.charityAccount.state}
          onChange={this.handleCharityForm}
        />
        <input
          className="signup__input"
          required
          type="text"
          placeholder="Zip"
          id="zip"
          autoComplete="off"
          name="zip"
          value={this.props.charityAccount.zip}
          onChange={this.handleCharityForm}
        />
        <input
          className="signup__input"
          required
          type="text"
          placeholder="Website"
          id="url"
          autoComplete="off"
          name="url"
          value={this.props.charityAccount.url}
          onChange={this.handleCharityForm}
        />
        <input
          className="signup__input"
          required
          type="text"
          placeholder="Tax ID"
          id="tax_id"
          autoComplete="off"
          name="tax_id"
          value={this.props.charityAccount.tax_id}
          onChange={this.handleCharityForm}
        />
        <input
          className="signup__input"
          required
          type="password"
          placeholder="Account number"
          id="account_number"
          autoComplete="off"
          name="account_number"
          value={this.props.charityAccount.account_number}
          onChange={this.handleCharityForm}
        />
        <input
          className="signup__input"
          required
          type="password"
          placeholder="Routing number"
          id="routing_number"
          autoComplete="off"
          name="routing_number"
          value={this.props.charityAccount.routing_number}
          onChange={this.handleCharityForm}
        />
        <div className="signup-form__buttons">
          <button type="submit" className="signup__button">
            Submit
          </button>
          <button
            type="button"
            className="signup__button"
            onClick={this.previousSignupForm}
          >
            Previous
          </button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  charityAccount: state.signupReducer.charityAccount,
  username: state.signupReducer.username,
  password: state.signupReducer.password
});

const mapActionsToProps = {
  createCharityAccount,
  previousSignupPage,
  handleCharityFormChanges
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(CharitySignup);
