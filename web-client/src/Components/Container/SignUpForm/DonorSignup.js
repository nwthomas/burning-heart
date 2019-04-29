import React from "react";
import { connect } from "react-redux";
import {
  nextSignupPage,
  previousSignupPage,
  handleDonorFormChanges,
  createDonorAccount
} from "../../../store/actions";

const DonorSignup = props => {
  const handleDonorForm = e => {
    props.handleDonorFormChanges(e.target.name, e.target.value);
  };
  const submitNewDonorAccount = e => {
    e.preventDefault();
    const newDonorAccountObj = {
      ...props.donorAccount,
      username: props.username,
      password: props.password,
      type: props.type
    };
    props.createDonorAccount(newDonorAccountObj);
  };
  const previousSignupForm = e => {
    e.preventDefault();
    props.previousSignupPage();
  };
  return (
    <form className="signup-form" onSubmit={submitNewDonorAccount}>
      <h2 className="signup-form__header">Create Donor Account</h2>
      <input
        className="signup__input"
        required
        type="text"
        placeholder="First name"
        id="firstName"
        autoComplete="off"
        name="firstName"
        value={props.donorAccount.firstName}
        onChange={handleDonorForm}
      />
      <input
        className="signup__input"
        required
        type="text"
        placeholder="Middle name"
        id="middleName"
        autoComplete="off"
        name="middleName"
        value={props.donorAccount.middleName}
        onChange={handleDonorForm}
      />
      <input
        className="signup__input"
        required
        type="text"
        placeholder="Last name"
        id="lastName"
        autoComplete="off"
        name="lastName"
        value={props.donorAccount.lastName}
        onChange={handleDonorForm}
      />
      <input
        className="signup__input"
        required
        type="text"
        placeholder="Email"
        id="email"
        autoComplete="off"
        name="email"
        value={props.donorAccount.email}
        onChange={handleDonorForm}
      />
      <input
        className="signup__input"
        required
        type="text"
        placeholder="Phone"
        id="phone"
        autoComplete="off"
        name="phone"
        value={props.donorAccount.phone}
        onChange={handleDonorForm}
      />
      <div className="signup-form__buttons">
        <button type="submit" className="signup__button">
          Submit
        </button>
        <button
          type="button"
          className="signup__button"
          onClick={previousSignupForm}
        >
          Previous
        </button>
      </div>
    </form>
  );
};

const mapStateToProps = state => ({
  donorAccount: state.signupReducer.donorAccount,
  username: state.signupReducer.username,
  password: state.signupReducer.password,
  type: state.signupReducer.accountType
});

const mapActionsToProps = {
  nextSignupPage,
  previousSignupPage,
  handleDonorFormChanges,
  createDonorAccount
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(DonorSignup);
