import React, { Component } from "react";
import { connect } from "react-redux";
import { startAddingOwner, startSigningTOS } from "../../../store/actions";

import { CharityOwnerSignup } from "../SignUpForm";
import { CharityOwnerVerification } from "../SignUpForm";

class FurtherCharitySignup extends Component {
  registerOwner = e => {
    e.preventDefault();
    this.props.startAddingOwner();
  };

  signTerms = e => {
    e.preventDefault();
    this.props.startSigningTOS();
  };

  render() {
    return (
      <>
        {this.props.signingTOS ? (
          <CharityOwnerVerification />
        ) : this.props.addingOwner ? (
          <CharityOwnerSignup />
        ) : (
          <div className="additional-steps__form">
            <h2 className="additional-steps__header">
              Further Action Required
            </h2>
            <p className="additional-steps__description">
              You must complete the following steps to finish activating your
              charity account.
            </p>
            <div className="additional-steps__buttons">
              {!this.props.charity.ownerAdded && (
                <button
                  className="additional-steps__button"
                  type="button"
                  onClick={this.registerOwner}
                >
                  Register Charity Owner
                </button>
              )}
              {!this.props.charity.termsAccepted && (
                <button
                  className="additional-steps__button"
                  type="button"
                  onClick={this.signTerms}
                >
                  Sign Terms of Service
                </button>
              )}
            </div>
          </div>
        )}
      </>
    );
  }
}

const mapStateToProps = state => ({
  charity: state.loginReducer.charity,
  addingOwner: state.signupReducer.addingOwner,
  signingTOS: state.signupReducer.signingTOS
});

const mapActionsToProps = {
  startAddingOwner,
  startSigningTOS
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(FurtherCharitySignup);

/*

Next steps:

1. Build out simple charity dashboard with donation amounts and account update

2. Web client Jest tests

3. Finalize marketing plan

*/
