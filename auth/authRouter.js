const express = require("express");
const bcrypt = require("bcryptjs");
require("dotenv").config();
const Accounts = require("../accounts/accountsModel.js");
const tokenService = require("./tokenService.js");
const authConstraints = require("./authConstraints.js"); // Error handling middleware for duplicate usernames and passwords

const router = express.Router();

// Auth account creation API route
router.post("/register", authConstraints, async (req, res) => {
  // Salt/hash of password
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

// Auth account login API route
router.post("/login", async (req, res) => {
  let creds = req.body;
  try {
    const account = await Accounts.findWithPassword()
      .where({ username: creds.username })
      .first();
    if (account && bcrypt.compareSync(creds.password, account.password)) {
      const token = tokenService.generateToken(account);
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
          charityId: account.charityId,
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

// Logout process is destroying token on front-end

module.exports = router;
