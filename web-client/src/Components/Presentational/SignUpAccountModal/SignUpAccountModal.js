import React from "react";
import { connect } from "react-redux";
import { closeSignUpModal } from "../../../store/actions";

import LoadingAnimation from "./LoadingAnimation";

const SignUpAccountModal = props => {
  const handleButton = e => {
    e.preventDefault();
    if (props.createAccountStart) {
      return false;
    } else if (props.createAccountSuccess) {
      props.closeSignUpModal();
      return props.history.push("/login");
    } else {
      props.closeSignUpModal();
    }
  };

  return (
    <div className="signup-modal__container">
      <div className="modal__box">
        <h2 className="modal__title">
          {props.createAccountStart ? "Sending..." : props.message}
        </h2>
        <button className="modal__button" onClick={handleButton}>
          {props.createAccountStart ? <LoadingAnimation /> : "Okay"}
        </button>
      </div>
    </div>
  );
};

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
