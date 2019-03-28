const express = require("express");
const bcrypt = require("bcryptjs");
const Users = require("../accounts/accountsModel");
const tokenService = require("../auth/tokenService.js");

// Creates router for specific API route
const router = express.Router();

router.post("/register", async (req, res) => {
  let newUser = req.body;
  if (
    !newUser.username ||
    !newUser.password ||
    !newUser.firstName ||
    !newUser.lastName
  ) {
    return res.status(406).json({
      message: "Please include a username and password and try again."
    });
  }

  // Encryption of password
  const hash = bcrypt.hashSync(newUser.password, 14); // Must be the same as the seeds
  newUser.password = hash;

  // Adding new user to database
  try {
    const user = await Users.insert(newUser);
    if (user) {
      res
        .status(200)
        .json({ message: "The account was created successfully.", user });
    } else {
      res
        .status(404)
        .json({ message: "The account could not be created in the database." });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "The account could not be created.", error });
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
