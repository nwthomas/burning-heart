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
        <CardElement className="card__element" />
        <button type="submit">Submit Donation</button>
      </form>
    );
  }
}

export default injectStripe(StripePaymentElement);
