const express = require("express");
const bcrypt = require("bcryptjs");
const Accounts = require("../accounts/accountsModel.js");
const tokenService = require("../auth/tokenService.js");
const authConstraints = require("./authConstraints.js"); // Error handling middleware for duplicate usernames and passwords

const router = express.Router();

// Account creation API route
router.post("/register", authConstraints, async (req, res) => {
  // Encryption of password
  const hash = bcrypt.hashSync(req.body.password, 14);
  req.body.password = hash;
  try {
    const account = await Accounts.insert(req.body);
    console.log(account);
    if (account) {
      res.status(200).json({
        error: false,
        message: "Your account was created successfully in the database.",
        account
      });
    } else {
      res.status(404).json({
        error: true,
        message: "Your account could not be created in the database.",
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

router.post("/login", async (req, res) => {
  let creds = req.body;
  try {
    const user = await Users.find()
      .where({ username: creds.username })
      .first();
    if (user && bcrypt.compareSync(creds.password, user.password)) {
      const token = tokenService.generateToken(user);
      res.status(200).json({
        message: "The user was logged in successfully.",
        user: { id: user.id, username: user.username }, // Expand with additional info as needed
        token
      });
    } else {
      res.status(404).json({ message: "The user could not be logged in." });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "There was an error logging in the user.", error });
  }
});

// Logout process is destroying token on front-end

module.exports = router;
