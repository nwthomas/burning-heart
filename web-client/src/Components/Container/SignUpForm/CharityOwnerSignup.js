import React, { Component } from "react";
import { connect } from "react-redux";
import {
  cancelFurtherAction,
  createCharityOwner,
  handleCharityOwnerForm
} from "../../../store/actions";

class CharityOwnerSignup extends Component {
  state = {
    selectedFile: ""
  };

  createOwner = e => {
    e.preventDefault();

    const {
      first_name,
      last_name,
      day,
      month,
      year,
      email,
      line1,
      city,
      state,
      postal_code,
      phone,
      ssn_last_4,
      relationship
    } = this.props.charityOwner;

    const newOwnerObj = {
      first_name,
      last_name,
      dob: {
        day: Number(day),
        month: Number(month),
        year: Number(year)
      },
      email,
      address: {
        line1,
        city,
        state,
        postal_code
      },
      phone,
      ssn_last_4,
      relationship
    };

    this.props.createCharityOwner(newOwnerObj, this.props.charity.id);
  };

  handleCharityForm = e => {
    this.props.handleCharityOwnerForm(e.target.name, e.target.value);
  };

  cancelAction = e => {
    e.preventDefault();
    this.props.cancelFurtherAction();
  };

  handleOwnerFile = e => {
    this.setState(
      {
        selectedFile: e.target.files[0]
      },
      console.log(this.state)
    );
  };

  render() {
    return (
      <form
        method={"Post"}
        encType="multipart/form-data"
        className="signup-form"
        onSubmit={this.createOwner}
      >
        <h2 className="signup-form__header no__bottom__margin">
          Register Charity Owner
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
        {/* <label htmlFor="verification">Verification:</label>
        <input
          className="signup__input"
          required
          type="file"
          id="verification"
          autoComplete="off"
          name="verification_front"
          onChange={this.handleOwnerFile}
        /> */}
        <div className="signup-form__buttons">
          <button type="submit" className="signup__button">
            Submit
          </button>
          <button
            type="button"
            className="signup__button"
            onClick={this.cancelAction}
          >
            Cancel
          </button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  charityOwner: state.signupReducer.charityOwner,
  charity: state.loginReducer.charity
});

const mapActionsToProps = {
  cancelFurtherAction,
  createCharityOwner,
  handleCharityOwnerForm
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(CharityOwnerSignup);
