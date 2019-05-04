import React, { Component } from "react";
import { connect } from "react-redux";
import {
  nextSignupPage,
  previousSignupPage,
  handleCharityFormChanges
} from "../../../store/actions";

class CharitySignup extends Component {
  nextSignupForm = e => {
    e.preventDefault();
    this.props.nextSignupPage();
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
      <form className="signup-form" onSubmit={this.nextSignupForm}>
        <h2 className="signup-form__header">Create Charity Account</h2>
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
          placeholder="street2"
          id="street2"
          autoComplete="off"
          name="street2"
          value={this.props.charityAccount.street2}
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
          placeholder="State"
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
        <div className="signup-form__buttons">
          <button type="submit" className="signup__button">
            Next
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
  charityAccount: state.signupReducer.charityAccount
});

const mapActionsToProps = {
  nextSignupPage,
  previousSignupPage,
  handleCharityFormChanges
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(CharitySignup);
