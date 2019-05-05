import React, { Component } from "react";
import { connect } from "react-redux";
import {
  nextSignupPage,
  previousSignupPage,
  handleCharityOwnerForm
} from "../../../store/actions";

class CharityOwnerVerification extends Component {
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
          Stripe Terms of Service
        </h2>
        <p className="signup_note">
          Contact Burning Heart for any signup issues.
        </p>
        <label for="verification_front">Verification Front:</label>
        <input
          className="signup__input"
          required
          type="file"
          id="verification_front"
          autoComplete="off"
          name="verification_front"
          value={this.props.charityOwner.first_name}
          onChange={this.handleCharityForm}
        />
        <label for="verification_back">Verification Back:</label>
        <input
          className="signup__input"
          type="file"
          id="verification_back"
          autoComplete="off"
          name="verification_back"
          value={this.props.charityOwner.first_name}
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
)(CharityOwnerVerification);
