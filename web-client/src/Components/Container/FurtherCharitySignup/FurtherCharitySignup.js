import React, { Component } from "react";
import { connect } from "react-redux";

class FurtherCharitySignup extends Component {
  render() {
    return (
      <div className="additional-steps__container">
        <div className="additional-steps__form">
          <h2 className="additional-steps__header">Further Action Required</h2>
          <p className="additiona-steps__description">
            You must complete the following steps to finish activating your
            charity account.
          </p>
          <div className="additional-steps__buttons">
            {!this.props.charity.ownerAdded && (
              <button className="additional-steps__button" type="button">
                Register Charity Owner
              </button>
            )}
            {!this.props.charity.termsAccepted && (
              <button className="additional-steps__button" type="button">
                Sign Terms of Service
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  charity: state.loginReducer.charity
});

export default connect(
  mapStateToProps,
  {}
)(FurtherCharitySignup);
