const express = require("express");
const bcrypt = require("bcryptjs");
require("dotenv").config();
const Accounts = require("../accounts/accountsModel.js");
const Charities = require("../charities/charitiesModel.js");
const tokenService = require("./tokenService.js");
const authConstraints = require("./authConstraints.js"); // Error handling middleware for duplicate usernames and passwords

const router = express.Router();

// Auth account creation API route
router.post("/register-account", authConstraints, async (req, res) => {
  // Salt/hash of password
  console.log(req.body);
  const hash = bcrypt.hashSync(req.body.password, 14);
  req.body.password = hash;
  try {
    const account = await Accounts.insert(req.body);
    if (account) {
      res.status(200).json({
        error: false,
        message: "Your account was created successfully.",
        account
      });
    } else {
      res.status(404).json({
        error: true,
        message: "Your account could not be created.",
        account: {}
      });
    }
  } catch (error) {
    res.status(500).json({
      error: true,
      message: "There was an error processing your request.",
      account: {}
    });
  }
});

// Auth charity creation API route
router.post("/register-charity", async (req, res) => {
  // Salt/hash of password
  console.log(req.body);
  const hash = bcrypt.hashSync(req.body.password, 14);
  req.body.password = hash;
  try {
    const charity = await Charities.insert(req.body);
    if (charity) {
      res.status(200).json({
        error: false,
        message: "Your charity was created successfully.",
        charity
      });
    } else {
      res.status(404).json({
        error: true,
        message: "Your charity could not be created.",
        charity: {}
      });
    }
  } catch (error) {
    res.status(500).json({
      error: true,
      message: "There was an error processing your request.",
      charity: {}
    });
  }
});

// Auth account login API route
router.post("/login-account", async (req, res) => {
  let creds = req.body;
  try {
    const account = await Accounts.findWithPassword()
      .where({ username: creds.username })
      .first();
    if (account && bcrypt.compareSync(creds.password, account.password)) {
      const token = tokenService.generateTokenAccount(account);
      res.status(200).json({
        error: false,
        message: "You were logged in successfully.",
        account: {
          id: account.id,
          username: account.username,
          firstName: account.firstName,
          middleName: account.middleName,
          lastName: account.lastName,
          email: account.email,
          phone: account.phone,
          type: account.type,
          driversLicense: account.driversLicense,
          created_at: account.created_at,
          updated_at: account.updated_at
        },
        token
      });
    } else {
      res.status(404).json({
        error: true,
        message: "You could not be logged in.",
        account: {}
      });
    }
  } catch (error) {
    res.status(500).json({
      error: true,
      message: "There was an error logging you in.",
      account: {}
    });
  }
});

// Auth charity login API route
router.post("/login-charity", async (req, res) => {
  let creds = req.body;
  console.log(creds);
  try {
    const charity = await Charities.findWithPassword()
      .where({ username: creds.username })
      .first();
    console.log(charity);
    if (charity && bcrypt.compareSync(creds.password, charity.password)) {
      console.log("Working!");
      const token = tokenService.generateTokenCharity(charity);
      res.status(200).json({
        error: false,
        message: "You were logged in successfully",
        charity: {
          id: charity.id,
          username: charity.username,
          charityName: charity.charityName,
          phone: charity.phone,
          street1: charity.street1,
          street2: charity.street2,
          city: charity.city,
          state: charity.state,
          zip: charity.zip,
          created_at: charity.created_at,
          updated_at: charity.updated_at
        },
        token
      });
    } else {
      res.status(404).json({
        error: true,
        message: "You could not be logged in.",
        charity: {}
      });
    }
  } catch (error) {
    res.status(500).json({
      error: true,
      message: "There was an error logging you in.",
      charity: {}
    });
  }
});

module.exports = router;
