import React, { Component } from "react";
import { injectStripe, CardElement } from "react-stripe-elements";

class StripePaymentElement extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.stripe
      .createToken({ type: "card", name: "Nathan Thomas" })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log("Working!");
      });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="modal__box">
          <h1 className="modal__title">Donate to XYZ</h1>
          <CardElement className="card__element" />
          <button className="modal__button donation__button" type="submit">
            Submit Donation
          </button>
        </div>
      </form>
    );
  }
}

export default injectStripe(StripePaymentElement);
