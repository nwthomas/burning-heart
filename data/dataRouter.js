const express = require("express");
const Donations = require("../donations/donationsModel.js");
const { makeGraphData } = require("./middleware.js");

const router = express.Router();

// Get all user
router.get("/donations/:id", async (req, res) => {
  try {
    const donations = await Donations.findByAccountId(req.params.id);
    if (donations.length) {
      res.status(200).json({
        error: false,
        message: "Your donation graph data was retrieved successfully.",
        donations: makeGraphData(donations)
      });
    } else {
      res.status(404).json({
        error: true,
        message: "No donations could be found for this user",
        donations: []
      });
    }
  } catch (error) {
    res.status(500).json({
      error: true,
      message: "There was an error completing your request.",
      donations: []
    });
  }
});

module.exports = router;
