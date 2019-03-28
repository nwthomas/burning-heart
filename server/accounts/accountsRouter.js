const express = require("express");
const Accounts = require("./accountsModel.js");
const bcrypt = require("bcryptjs");

const router = express();

// Accounts retrieval API route
router.get("/", async (req, res) => {
  try {
    const accounts = await Accounts.find();
    if (accounts.length) {
      res.status(200).json({
        error: false,
        message: "The accounts were retrieved successfully from the database.",
        accounts
      });
    } else {
      res.status(404).json({
        error: true,
        message: "The accounts could not be retrieved from the database.",
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
        message: "Your account was retrieved successfully from the database.",
        account
      });
    } else {
      res.status(404).json({
        error: true,
        message:
          "There was an error retrieving your account from the database.",
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

// Account update by ID API route
router.put("/:id", async (req, res) => {
  // Conditional encryption of password
  if (req.body.password) {
    const hash = bcrypt.hashSync(req.body.password, 14); // Must be the same as account creation
    req.body.password = hash;
  }
  try {
    const account = await Accounts.update(req.params.id, req.body);
    if (account) {
      res.status(200).json({
        error: false,
        message: "Your account was updated successfully in the database.",
        account
      });
    } else {
      res.status(404).json({
        error: true,
        message: "There was an error updating your account in the database.",
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
        message: "There was an error deleting your account in the database.",
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
