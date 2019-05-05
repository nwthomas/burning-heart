require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_API_KEY);

module.exports = {
  makeStripeAccount,
  makeStripeOwner,
  signTOS
};

async function makeStripeAccount(creds) {
  return await stripe.accounts.create({
    country: "US",
    type: "custom",
    business_type: "company",
    email: creds.email,
    default_currency: "usd",
    requested_capabilities: ["card_payments"],
    company: {
      name: creds.charityName,
      address: {
        line1: creds.street1,
        city: creds.city,
        postal_code: creds.zip,
        state: creds.state
      },
      tax_id: creds.tax_id,
      phone: creds.phone
    },
    business_profile: {
      mcc: "8398",
      url: creds.url
    },
    external_account: {
      object: "bank_account",
      country: "US",
      currency: "usd",
      routing_number: creds.routing_number,
      account_number: creds.account_number
    }
  });
}

async function makeStripeOwner(creds, accountToken) {
  return await stripe.accounts.createPerson(accountToken, {
    ...creds
  });
}

async function signTOS(accountToken, req) {
  return await stripe.accounts.update(accountToken, {
    tos_acceptance: {
      date: Math.floor(Date.now() / 1000),
      ip: req.connection.remoteAddress // Assumes you're not using a proxy
    }
  });
}
