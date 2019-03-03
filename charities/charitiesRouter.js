const express = require("express");
const Charities = require("./charitiesModel.js");
const tokenService = require("../auth/tokenService.js");

const router = express.Router();

// Get all charities in database route
router.get("/", async (req, res) => {
  try {
    const charities = await Charities.find();
    if (charities.length) {
      res.status(200).json({
        message: "The charities were found in the database.",
        charities
      });
    } else {
      res
        .status(404)
        .json({ message: "No charities could be found in the databse." });
    }
  } catch (error) {
    res.status(500).json({
      message: "There was an error retrieving the charities from the database."
    });
  }
});

// Get charity by ID route
router.get("/:id", async (req, res) => {
  try {
    const charities = await Charities.findById(req.params.id);
    if (charities) {
      res.status(200).json({
        message: "The charity was found in the database.",
        charities
      });
    } else {
      res
        .status(404)
        .json({ message: "The charity could not be found in the database." });
    }
  } catch (error) {
    res.status(500).json({
      message: "There was an error retrieving the charity from the database."
    });
  }
});

// Update charity route
router.put("/:id", async (req, res) => {
  if (!req.body.name) {
    res
      .status(404)
      .json({ message: "Please include a name to update and try again." });
  }
  try {
    const updatedCharity = await Charities.update(req.params.id, req.body);
    if (updatedCharity) {
      res.status(200).json({
        message: "The charity was updated in the database.",
        numUpdated: updatedCharity
      });
    } else {
      res
        .status(404)
        .json({ message: "The charity could not be updated in the database." });
    }
  } catch (error) {
    res.status(500).json({
      message: "There was an error updating the charity in the database."
    });
  }
});

module.exports = router;
