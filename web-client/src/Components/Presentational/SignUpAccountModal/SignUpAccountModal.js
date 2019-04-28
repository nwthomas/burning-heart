import React, { Component } from "react";
import { connect } from "react-redux";
import { closeSignUpModal } from "../../../store/actions";

import LoadingAnimation from "./LoadingAnimation";

class SignUpAccountModal extends Component {
  handleButton = e => {
    e.preventDefault();
    if (this.props.createAccountStart) {
      return false;
    } else if (this.props.createAccountSuccess) {
      this.props.closeSignUpModal();
      return this.props.history.push("/home");
    } else {
      this.props.closeSignUpModal();
    }
  };

  render() {
    return (
      <div className="signup-modal__container">
        <div className="modal__box">
          <h2 className="modal__title">
            {this.props.createAccountStart ? "Sending" : this.props.message}
          </h2>
          <button className="modal__button" onClick={this.handleButton}>
            {this.props.createAccountStart ? <LoadingAnimation /> : "Okay"}
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  createAccountStart: state.signupReducer.createAccountStart,
  createAccountSuccess: state.signupReducer.createAccountSuccess,
  createAccountError: state.signupReducer.createAccountError,
  modalOpen: state.signupReducer.modalOpen,
  message: state.signupReducer.message
});

const mapActionsToProps = {
  closeSignUpModal
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(SignUpAccountModal);
