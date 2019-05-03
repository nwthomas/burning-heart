import React from "react";
import { Elements } from "react-stripe-elements";
import { connect } from "react-redux";
import { closePaymentModal, handlePaymentForm } from "../../../store/actions";

import StripePaymentElement from "./StripePaymentElement";

const PaymentModal = props => {
  return (
    <div className="modal__container">
      <Elements>
        <StripePaymentElement
          charities={props.charities}
          selectedCharity={props.selectedCharity}
          donationAmount={props.donationAmount}
          closePaymentModal={props.closePaymentModal}
          handlePaymentForm={props.handlePaymentForm}
        />
      </Elements>
    </div>
  );
};

const mapStateToProps = state => ({
  charities: state.donorReducer.charities,
  selectedCharity: state.donorReducer.selectedCharity,
  donationAmount: state.donorReducer.donationAmount
});

const mapActionsToProps = {
  closePaymentModal,
  handlePaymentForm
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(PaymentModal);
