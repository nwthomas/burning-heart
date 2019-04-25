const express = require("express");
const configureMiddleware = require("./middleware.js"); // General middleware import
const restricted = require("../auth/restricted.js"); // Auth JWT import
const authRouter = require("../auth/authRouter.js");
const charitiesRouter = require("../charities/charitiesRouter.js");
const donationsRouter = require("../donations/donationsRouter.js");
const accountsRouter = require("../accounts/accountsRouter.js");
const dataRouter = require("../data/dataRouter.js");
const server = express();

// Pass server through general middleware configurations
configureMiddleware(server);

require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_API_KEY);

const createStripeCustomer = email => {
  stripe.customers.create(
    {
      description: `Customer for ${email}`
    },
    function(err, customer) {
      if (err) {
        return {
          error: true,
          message: "There was an error processing your request"
        };
      } else {
        console.log(customer);
        return { error: false, customerToken: customer.id };
      }
    }
  );
};

async function createStripeConnect() {
  try {
    let account = await stripe.accounts.create({
      country: "US",
      type: "custom",
      requested_capabilities: ["card_payments"]
    });
    if (account) return account;
  } catch (error) {
    return error;
  }
}

// RESTful API routes
server.use("/api/restricted/charities", restricted, charitiesRouter);
server.use("/api/restricted/donations", restricted, donationsRouter);
server.use("/api/restricted/accounts", restricted, accountsRouter);
server.use("/api/restricted/data", restricted, dataRouter);
server.use("/api/auth", authRouter);

// Single test server / route
server.get("/", async (request, res) => {
  // let account = await stripe.accounts.create({
  //   country: "US",
  //   type: "custom",
  //   email: "email@me.com",
  //   business_type: "company",
  //   default_currency: "usd",
  //   external_account: {
  //     object: "bank_account",
  //     country: "US",
  //     currency: "usd",
  //     routing_number: "110000000",
  //     account_number: "000123456789"
  //   },
  //   requested_capabilities: ["card_payments"]
  // });

  // await stripe.accounts.update("acct_1ESzrJKy7Q37pCw1", {
  //   tos_acceptance: {
  //     date: Math.floor(Date.now() / 1000),
  //     ip: request.connection.remoteAddress // Assumes you're not using a proxy
  //   }
  // });

  await stripe.charges
    .create(
      {
        amount: 1000,
        currency: "usd",
        source: "tok_visa"
      },
      {
        stripe_account: "acct_1ESzrJKy7Q37pCw1"
      }
    )
    .then(function(charge) {
      console.log(charge);
    });

  res.send("The Burning Server is up and running! 🔥");
});

module.exports = server;
