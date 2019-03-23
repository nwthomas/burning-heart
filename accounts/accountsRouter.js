const express = require("express");
const Accounts = require("./accountsModel.js");
const bcrypt = require("bcryptjs");

const router = express();

router.get("/", async (req, res) => {
  try {
    const accounts = await Accounts.find();
    if (accounts.length) {
      res.status(200).json({
        error: false,
        message: "The accounts were retrieved from the database.",
        accounts
      });
    } else {
      res.status(404).json({
        error: true,
        message:
          "There was an error retrieving your accounts from the database.",
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

// Get account by ID request
router.get("/:id", async (req, res) => {
  try {
    const account = await Accounts.findById(req.params.id);
    if (account) {
      res.status(200).json({
        error: false,
        message: "The account was retrieved from the database.",
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

// Update account by ID request
router.put("/:id", async (req, res) => {
  // Encryption of password
  if (req.body.password) {
    const hash = bcrypt.hashSync(req.body.password, 14);
    req.body.password = hash;
  }
  try {
    const account = await Accounts.update(req.params.id, req.body);
    if (account) {
      const newAccount = await Accounts.findById(req.params.id);
      if (newAccount) {
        const { id, username, email, created_at, updated_at } = newAccount;
        res.status(200).json({
          error: false,
          message: "Your account was successfully updated in the database.",
          account: {
            id,
            username,
            email,
            created: created_at,
            updated: updated_at
          }
        });
      } else {
        res.status(404).json({
          error: true,
          message: "Your account was created but could not be retrieved.",
          account: {}
        });
      }
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

router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Accounts.remove(req.params.id);
    if (deleted) {
      res
        .status(200)
        .json({
          error: false,
          message: "Your account was deleted successfully.",
          numDeleted: 1
        });
    } else {
      res.status(404).json({
        error: true,
        message: "There was an error deleting your account in the database.",
        account: {}
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
