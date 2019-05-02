import React from "react";
import { Elements } from "react-stripe-elements";

import StripePaymentElement from "./StripePaymentElement";

const PaymentModal = () => {
  return (
    <div className="modal__container">
      <Elements>
        <StripePaymentElement />
      </Elements>
    </div>
  );
};

export default PaymentModal;
