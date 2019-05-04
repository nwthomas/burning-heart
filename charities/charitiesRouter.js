const express = require("express");
const Charities = require("./charitiesModel.js");

const router = express.Router();

// Charities retrieval API route
router.get("/", async (req, res) => {
  try {
    const charities = await Charities.find();
    if (charities.length) {
      res.status(200).json({
        error: false,
        message: "The charities were retrieved successfully from the database.",
        charities
      });
    } else {
      res.status(404).json({
        error: true,
        message: "No charities could be retrieved from the databse.",
        charities: []
      });
    }
  } catch (error) {
    res.status(500).json({
      error: true,
      message: "There was an error processing your request.",
      charities: []
    });
  }
});

// Charities retrieval by ID API route
router.get("/:id", async (req, res) => {
  console.log(req.body);
  try {
    const charity = await Charities.findById(req.params.id);
    if (charity) {
      res.status(200).json({
        error: false,
        message: "The charity was retrieved successfully from the database.",
        charity
      });
    } else {
      res.status(404).json({
        error: true,
        message: "The charity could not be retrieved from the database.",
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

// Charity creation API route
router.post("/", async (req, res) => {
  if (!req.body.charityName) {
    res.status(400).json({
      error: true,
      message: "Please include the required charity information and try again.",
      charity: {}
    });
  } else {
    try {
      const charity = await Charities.insert(req.body);
      if (charity.length) {
        res.status(201).json({
          error: false,
          message: "Your charity was created successfully in the database.",
          charity: charity[charity.length - 1]
        });
      } else {
        res.status(404).json({
          error: true,
          message: "Your charity could not be created in the database.",
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
  }
});

// Charity update by ID API route
router.put("/:id", async (req, res) => {
  try {
    const charity = await Charities.update(req.params.id, req.body);
    if (charity) {
      res.status(200).json({
        error: false,
        message: "The charity was updated successfully in the database.",
        charity
      });
    } else {
      res.status(404).json({
        error: true,
        message: "The charity could not be found in the database.",
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

// Charity delete by ID API route
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Charities.remove(req.params.id);
    if (deleted) {
      res.status(200).json({
        error: false,
        message: "The charity was deleted successfully from the database.",
        numDeleted: deleted
      });
    } else {
      res.status(404).json({
        error: true,
        message: "The charity could not be deleted from the database.",
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
