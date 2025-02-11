const express = require("express");
const Accounts = require("./accountsModel.js");
const bcrypt = require("bcryptjs");
require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_API_KEY);

const router = express();

const createStripeCustomer = email => {
  stripe.customer.create(
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
        return { error: false, customerToken: customer.id };
      }
    }
  );
};

// Accounts retrieval API route
router.get("/", async (req, res) => {
  try {
    const accounts = await Accounts.find();
    if (accounts.length) {
      res.status(200).json({
        error: false,
        message: "The accounts were retrieved successfully.",
        accounts
      });
    } else {
      res.status(404).json({
        error: true,
        message: "Your account could not be retrieved.",
        accounts: []
      });
    }
  } catch (error) {
    res.status(500).json({
      error: true,
      message: "There was an error completing your request.",
      accounts: []
    });
  }
});

// Account retrieval by ID API route
router.get("/:id", async (req, res) => {
  try {
    const account = await Accounts.findById(req.params.id);
    if (account) {
      res.status(200).json({
        error: false,
        message: "Your account was retrieved successfully.",
        account
      });
    } else {
      res.status(404).json({
        error: true,
        message: "There was an error retrieving your account..",
        account: {}
      });
    }
  } catch (error) {
    res.status(500).json({
      error: true,
      message: "There was an error completing your request.",
      account: {}
    });
  }
});

router.post("/", async (req, res) => {
  const { username, password, email, phone } = req.body; // Required and all unique values from client
  if (!username || !password || !email || !phone) {
    res.status(406).json({
      error: true,
      message: "Please include the required credentials and try again.",
      user: {}
    });
  } else {
    try {
      const newUser = await Accounts.insert(req.body);
      const stripeAcct = createStripeCustomer(email);
      console.log(stripeAcct);
      if (newUser) {
        res.status(200).json({
          error: false,
          message: "Your account was created successfully.",
          user: newUser,
          stripe: stripeAcct
        });
      } else {
        res.status(404).json({
          error: true,
          message: "There was an error creating your account in the database.",
          account: {}
        });
      }
    } catch (error) {
      res.status(500).json({
        error: true,
        message: "There was an error completing your request.",
        account: {}
      });
    }
  }
});

// Account update by ID API route
router.put("/:id", async (req, res) => {
  // Conditional encryption of password
  if (req.body.password) {
    const hash = bcrypt.hashSync(req.body.password, 14); // Must be the same as account creation
    req.body.password = hash;
  }
  console.log(req.body);
  try {
    const account = await Accounts.update(req.params.id, req.body);
    if (account) {
      res.status(200).json({
        error: false,
        message: "Your account was updated successfully.",
        account
      });
    } else {
      res.status(404).json({
        error: true,
        message: "There was an error updating your account.",
        account: {}
      });
    }
  } catch (error) {
    res.status(500).json({
      error: true,
      message: "There was an error completing your request.",
      account: {}
    });
  }
});

// Account delete by ID API request
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Accounts.remove(req.params.id);
    if (deleted) {
      res.status(200).json({
        error: false,
        message: "Your account was deleted successfully.",
        numDeleted: deleted
      });
    } else {
      res.status(404).json({
        error: true,
        message: "There was an error deleting your account.",
        numDeleted: 0
      });
    }
  } catch (error) {
    res.status(500).json({
      error: true,
      message: "There was an error completing your request.",
      numDeleted: 0
    });
  }
});

module.exports = router;
