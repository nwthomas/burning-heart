const express = require("express");
const Donations = require("./donationsModel.js");

const router = express.Router();

// Donation retrieval API route
router.get("/", async (req, res) => {
  try {
    const donations = await Donations.find();
    if (donations.length) {
      res.status(200).json({
        error: false,
        message: "The donations were retrieved successfully from the database.",
        donations
      });
    } else {
      res.status(404).json({
        error: true,
        message: "The donations could not be retrieved from the database.",
        donations: []
      });
    }
  } catch (error) {
    res.status(500).json({
      error: true,
      message: "There was an error processing your request.",
      donations: []
    });
  }
});

// Donation retreival by account ID API route
router.get("/account/:id", async (req, res) => {
  try {
    const donations = await Donations.findByAccountId(req.params.id);
    if (donations.length) {
      res.status(200).json({
        error: false,
        message: "The donations were retrieved successfully from the database.",
        donations
      });
    } else {
      res.status(404).json({
        error: true,
        message: "The donations could not be retrieved from the database.",
        donations: []
      });
    }
  } catch (error) {
    res.status(500).json({
      error: true,
      message: "There was an error processing your request.",
      donations: []
    });
  }
});

// Donations retrieval by charity ID API route
router.get("/charity/:id", async (req, res) => {
  try {
    const donations = await Donations.findByCharityId(req.params.id);
    if (donations.length) {
      res.status(200).json({
        error: false,
        message: "The donations were retrieved successfully from the database.",
        donations
      });
    } else {
      res.status(404).json({
        error: true,
        message: "The donations could not be retrieved from the database.",
        donations: []
      });
    }
  } catch (error) {
    res.status(500).json({
      error: true,
      message: "There was an error processing your request.",
      donations: []
    });
  }
});

// Donation creation API route
router.post("/", async (req, res) => {
  const { charityId, accountId, amount } = req.body;
  if (!charityId || !accountId || !amount) {
    res.status(400).json({
      error: true,
      message:
        "Please include the required donation information and try again.",
      donation: {}
    });
  } else {
    try {
      const donation = await Donations.insert(req.body);
      if (donation) {
        res.status(201).json({
          error: false,
          message: "Your donation was created successfully in the database.",
          donation
        });
      } else {
        res.status(404).json({
          error: true,
          message: "Your donation could not be created in the database.",
          donation: {}
        });
      }
    } catch (error) {
      res.status(500).json({
        error: true,
        message: "There was an error processing your request.",
        donation: {}
      });
    }
  }
});

// Donation update API route
router.put("/:id", async (req, res) => {
  try {
    const updatedDonation = await Donations.update(req.params.id, req.body);
    if (updatedDonation) {
      res.status(200).json({
        error: false,
        message: "Your donation was updated successfully in the database.",
        donation: updatedDonation
      });
    } else {
      res.status(404).json({
        error: true,
        message: "Your donation could not be updated in the database.",
        donation: {}
      });
    }
  } catch (error) {
    res.status(500).json({
      error: true,
      message: "There was an error processing your request.",
      donation: {}
    });
  }
});

// Donation delete by ID API request
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Donations.remove(req.params.id);
    if (deleted) {
      res.status(200).json({
        error: false,
        message: "Your donation was deleted successfully from the database.",
        numDeleted: deleted
      });
    } else {
      res.status(404).json({
        error: true,
        message: "Your donation could not be deleted in the database.",
        numDeleted: 0
      });
    }
  } catch (error) {
    res.status(500).json({
      error: true,
      message: "There was an error processing your request.",
      numDeleted: 0
    });
  }
});

module.exports = router;
