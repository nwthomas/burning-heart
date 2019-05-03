import React, { Component } from "react";
import { injectStripe, CardElement } from "react-stripe-elements";

class StripePaymentElement extends Component {
  state = {
    selected: {}
  };
  componentDidMount() {
    const body = document.querySelector("body");
    body.classList.toggle("stopScroll");
    const selected = this.props.charities.filter(charity => {
      return charity.id === this.props.selectedCharity;
    });
    this.setState({
      selected: selected[0]
    });
  }
  componentWillUnmount() {
    const body = document.querySelector("body");
    body.classList.toggle("stopScroll");
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.stripe
      .createToken({ type: "card", name: "Nathan Thomas" })
      .then(res => {
        this.props.makePayment(
          Number(this.props.amount), // Number, donation amount
          res, // Card token object
          this.props.selectedCharity, // Number id of charity
          this.props.account.id // User account id
        );
      })
      .catch(err => {
        // Finish later
      });
  };
  handleChange = e => {
    console.log("Working!");
    e.preventDefault();
    this.props.handlePaymentForm(e.target.name, e.target.value);
  };
  cancelModal = e => {
    e.preventDefault();
    this.props.closePaymentModal();
  };
  render() {
    console.log(this.props.account);
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="modal__box">
          <h1 className="modal__title">
            Donate to {this.state.selected.charityName}
          </h1>
          <input
            className="payment__amount"
            value={this.props.donationAmount}
            name="amount"
            placeholder="Amount"
            onChange={this.handleChange}
          />
          <CardElement className="card__element" />
          <div className="modal__buttons">
            <button className="modal__button donation__button" type="submit">
              Submit Donation
            </button>
            <button
              className="modal__button cancel__button"
              type="submit"
              onClick={this.cancelModal}
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default injectStripe(StripePaymentElement);
