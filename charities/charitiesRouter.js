const express = require("express");
const Charities = require("./charitiesModel.js");
const tokenService = require("../auth/tokenService.js");

const router = express.Router();

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
      message: "There was an error retrieving the charities from the database.",
      error
    });
  }
});

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
        .json({ message: "The charity could not be found in the databse." });
    }
  } catch (error) {
    res.status(500).json({
      message: "There was an error retrieving the charity from the database.",
      error
    });
  }
});

module.exports = router;
