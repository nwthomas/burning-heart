import React from "react";
import { Elements } from "react-stripe-elements";
import { connect } from "react-redux";
import {
  closePaymentModal,
  handlePaymentForm,
  makePayment,
  handleCardTokenError
} from "../../../store/actions";

import StripePaymentElement from "./StripePaymentElement";
import PaymentSendingModal from "./PaymentSendingModal";

const PaymentModal = props => {
  return (
    <div className="modal__container">
      {props.makePaymentStart ||
      props.makePaymentSuccess ||
      props.makePaymentError ? (
        <PaymentSendingModal closePaymentModal={props.closePaymentModal} />
      ) : (
        <Elements>
          <StripePaymentElement
            charities={props.charities}
            selectedCharity={props.selectedCharity}
            donationAmount={props.donationAmount}
            closePaymentModal={props.closePaymentModal}
            handlePaymentForm={props.handlePaymentForm}
            makePayment={props.makePayment}
            amount={props.amount}
            account={props.account}
            handleCardTokenError={props.handleCardTokenError}
          />
        </Elements>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  charities: state.donorReducer.charities,
  selectedCharity: state.donorReducer.selectedCharity,
  amount: state.donorReducer.amount,
  account: state.loginReducer.account,
  makePaymentStart: state.donorReducer.makePaymentStart,
  makePaymentSuccess: state.donorReducer.makePaymentSuccess,
  makePaymentError: state.donorReducer.makePaymentError
});

const mapActionsToProps = {
  closePaymentModal,
  handlePaymentForm,
  makePayment,
  handleCardTokenError
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(PaymentModal);
