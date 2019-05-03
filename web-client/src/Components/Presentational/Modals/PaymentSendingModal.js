import React from "react";
import { connect } from "react-redux";
import { closePaymentModal } from "../../../store/actions";

import LoadingAnimation from "./LoadingAnimation";

const PaymentSendingModal = props => {
  const handleButton = e => {
    e.preventDefault();
    if (props.loginStart) {
      return false;
    } else {
      props.closePaymentModal();
    }
  };
  return (
    <div className="modal__container">
      <div className="modal__box">
        <h2 className="modal__title">
          {props.makePaymentStart ? "Sending Donation" : props.message}
        </h2>
        <div className="modal__buttons modal__buttons--center">
          <button className="modal__button" onClick={handleButton}>
            {props.makePaymentStart ? <LoadingAnimation /> : "Okay"}
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  message: state.donorReducer.message,
  makePaymentStart: state.donorReducer.makePaymentStart
});

const mapActionsToProps = {
  closePaymentModal
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(PaymentSendingModal);
