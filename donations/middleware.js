const stripe = require("stripe")(process.env.STRIPE_API_KEY);

const makeStripePayment = async (amount, cardToken, charityToken) => {
  return await stripe.charges
    .create(
      {
        amount: Number(amount),
        currency: "usd",
        source: cardToken
      },
      {
        stripe_account: charityToken
      }
    )
    .then(charge => {
      return charge;
    })
    .catch(err => {
      return err;
    });
};

module.exports = makeStripePayment;
