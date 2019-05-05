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

async function makeStripeOwner(accountToken, creds) {
  await stripe.accounts
    .createPerson(res.id, {
      first_name: "Nathan",
      last_name: "Thomas",
      dob: {
        day: 1,
        month: 12,
        year: 1987
      },
      email: "nwthomas@me.com",
      address: {
        city: "Angwin",
        line1: "475 Eastern Avenue",
        postal_code: "94508",
        state: "CA"
      },
      phone: "(707) 483-5207",
      ssn_last_4: "6563",
      relationship: {
        account_opener: true,
        director: true,
        owner: true,
        percent_ownership: 100,
        title: "CEO"
      }
    })
    .then(res => {
      return res;
    })
    .catch(err => {
      return err;
    });
}

async function signTOS(accountToken, req) {
  await stripe.accounts
    .update(res.id, {
      tos_acceptance: {
        date: Math.floor(Date.now() / 1000),
        ip: request.connection.remoteAddress // Assumes you're not using a proxy
      }
    })
    .then(res => {
      return res;
    })
    .catch(err => {
      return err;
    });
}
