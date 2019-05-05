import React, { Component } from "react";
import { connect } from "react-redux";
import {
  nextSignupPage,
  previousSignupPage,
  handleCharityOwnerForm
} from "../../../store/actions";

class CharityOwnerSignup extends Component {
  nextSignupForm = e => {
    e.preventDefault();
    this.props.nextSignupPage();
  };
  handleCharityForm = e => {
    this.props.handleCharityOwnerForm(e.target.name, e.target.value);
  };
  previousSignupForm = e => {
    e.preventDefault();
    this.props.previousSignupPage();
  };
  render() {
    return (
      <form className="signup-form" onSubmit={this.nextSignupForm}>
        <h2 className="signup-form__header no__bottom__margin">
          Create Charity Owner
        </h2>
        <p className="signup_note">
          Contact Burning Heart for any signup issues.
        </p>
        <input
          className="signup__input"
          required
          type="text"
          placeholder="First name"
          id="first_name"
          autoComplete="off"
          name="first_name"
          value={this.props.charityOwner.first_name}
          onChange={this.handleCharityForm}
        />
        <input
          className="signup__input"
          required
          type="text"
          placeholder="Last name"
          id="last_name"
          autoComplete="off"
          name="last_name"
          value={this.props.charityOwner.last_name}
          onChange={this.handleCharityForm}
        />
        <input
          className="signup__input"
          required
          type="text"
          placeholder="Owner email"
          id="email"
          autoComplete="off"
          name="email"
          value={this.props.charityOwner.email}
          onChange={this.handleCharityForm}
        />
        <input
          className="signup__input"
          required
          type="text"
          placeholder="Owner phone"
          id="phone"
          autoComplete="off"
          name="phone"
          value={this.props.charityOwner.phone}
          onChange={this.handleCharityForm}
        />
        <input
          className="signup__input"
          required
          type="text"
          placeholder="Street 1"
          id="line1"
          autoComplete="off"
          name="line1"
          value={this.props.charityOwner.line1}
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
          value={this.props.charityOwner.city}
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
          value={this.props.charityOwner.state}
          onChange={this.handleCharityForm}
        />
        <input
          className="signup__input"
          required
          type="text"
          placeholder="Postal code"
          id="postal_code"
          autoComplete="off"
          name="postal_code"
          value={this.props.charityOwner.postal_code}
          onChange={this.handleCharityForm}
        />
        <input
          className="signup__input"
          required
          type="password"
          placeholder="Last 4 of SSN"
          id="ssn_last_4"
          autoComplete="off"
          name="ssn_last_4"
          value={this.props.charityOwner.ssn_last_4}
          onChange={this.handleCharityForm}
        />
        <input
          className="signup__input"
          required
          type="password"
          placeholder="Date of birth day (i.e. 1, 2, 3, etc.)"
          id="day"
          autoComplete="off"
          name="day"
          value={this.props.charityOwner.day}
          onChange={this.handleCharityForm}
        />
        <input
          className="signup__input"
          required
          type="password"
          placeholder="Date of birth month (i.e. 9, 10, 11, etc.)"
          id="month"
          autoComplete="off"
          name="month"
          value={this.props.charityOwner.month}
          onChange={this.handleCharityForm}
        />
        <input
          className="signup__input"
          required
          type="password"
          placeholder="Date of birth year (i.e. 1957, 2001, etc.)"
          id="year"
          autoComplete="off"
          name="year"
          value={this.props.charityOwner.year}
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
  charityOwner: state.signupReducer.charityOwner
});

const mapActionsToProps = {
  nextSignupPage,
  previousSignupPage,
  handleCharityOwnerForm
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(CharityOwnerSignup);
