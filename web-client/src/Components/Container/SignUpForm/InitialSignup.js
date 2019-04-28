import React from "react";
import { connect } from "react-redux";
import {
  nextSignupPage,
  handleSignupFormChanges
} from "../../../store/actions";

const InitialSignup = props => {
  const goLandingPage = e => {
    e.preventDefault();
    props.history.push("/");
  };
  const nextSignupForm = e => {
    e.preventDefault();
    props.nextSignupPage();
  };
  const handleChange = e => {
    props.handleSignupFormChanges(e.target.name, e.target.value);
  };
  return (
    <form className="signup-form" onSubmit={nextSignupForm}>
      <h2 className="signup-form__header">Sign Up</h2>
      <input
        className="signup__input"
        required
        type="text"
        placeholder="Username"
        id="username"
        autoComplete="off"
        name="username"
        value={props.username}
        onChange={handleChange}
      />
      <input
        className="signup__input"
        required
        type="password"
        placeholder="New password"
        id="password"
        autoComplete="off"
        name="password"
        value={props.password}
        onChange={handleChange}
      />
      <select
        required
        className="signup__select"
        defaultValue=""
        name="accountType"
        placeholder="Select account type"
        onChange={handleChange}
      >
        <option disabled value="">
          Select account type
        </option>
        <option value="donor">Donor</option>
        <option value="charity">Charity</option>
      </select>
      <div className="signup-form__buttons">
        <button type="submit" className="signup__button next__button">
          Next
        </button>
        <button
          type="button"
          className="signup__button cancel__button"
          onClick={goLandingPage}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

const mapActionToProps = {
  nextSignupPage,
  handleSignupFormChanges
};

const mapStateToProps = state => ({
  username: state.signupReducer.username,
  password: state.signupReducer.password
});

export default connect(
  mapStateToProps,
  mapActionToProps
)(InitialSignup);
