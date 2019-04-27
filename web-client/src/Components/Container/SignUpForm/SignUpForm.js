import React from "react";

import { Navbar } from "../../Presentational/Navbar";

const SignUpForm = ({ history }) => {
  const goLandingPage = e => {
    e.preventDefault();
    history.push("/");
    console.log(history);
  };
  const nextSignupForm = e => {
    e.preventDefault();
  };
  return (
    <>
      <Navbar />
      <div className="form-page__container">
        <form className="signup-form" onSubmit={nextSignupForm}>
          <h2 className="signup-form__header">Sign Up</h2>
          <input
            className="signup__input"
            required
            type="text"
            placeholder="Username"
            id="username"
            autoComplete="off"
          />
          <input
            className="signup__input"
            required
            type="password"
            placeholder="New password"
            id="password"
            autoComplete="off"
          />
          <select
            required
            className="signup__select"
            defaultValue=""
            placeholder="Select account type"
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
      </div>
    </>
  );
};

export default SignUpForm;
