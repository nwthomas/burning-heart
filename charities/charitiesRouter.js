const express = require("express");
const Charities = require("./charitiesModel.js");
const { makeStripeOwner, signTOS } = require("./stripeAccountMiddleware.js");
const dataUri = require("../config/dataUri.js");

const router = express.Router();

// Charities retrieval API route
router.get("/", async (req, res) => {
  try {
    const charities = await Charities.find();
    const filteredCharities = charities.filter(charity => {
      if (charity.registered && charity.ownerAdded && charity.termsAccepted) {
        return true;
      } else {
        return true;
      }
    });
    if (filteredCharities.length) {
      res.status(200).json({
        error: false,
        message: "The charities were retrieved successfully from the database.",
        charities: filteredCharities
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

// Charity create legal owner API route
router.post("/create-owner/:id", async (req, res) => {
  // const charity = await Charities.findByIdWithToken(req.params.id);
  const file = dataUri(req).content;
  console.log(file);
  // if (charity) {
  //   try {
  //     const ownerStripeRegistration = await makeStripeOwner(
  //       req.body.ownerDetails,
  //       charity.stripeToken
  //     );
  //     console.log(ownerStripeRegistration);
  //     if (ownerStripeRegistration) {
  //       const updatedCharity = await Charities.update(req.params.id, {
  //         ownerAdded: true
  //       });
  //       if (updatedCharity) {
  //         res.status(200).json({
  //           error: false,
  //           message: "The owner was added successfully to the charity account.",
  //           charity: updatedCharity
  //         });
  //       } else {
  //         res.status(500).json({
  //           error: true,
  //           message:
  //             "There was an error updating your account. Please contact Burning Heart.",
  //           charity: {}
  //         });
  //       }
  //     } else {
  //       res.status(500).json({
  //         error: true,
  //         message: "Please check owner details and try again.",
  //         charity: {}
  //       });
  //     }
  //   } catch (error) {
  //     res.status(500).json({
  //       error: true,
  //       message: "Please check owner details and try again.",
  //       charity: {}
  //     });
  //   }
  // } else {
  //   res.status(500).json({
  //     error: true,
  //     message: "Please check the owner details and try again.",
  //     charity: {}
  //   });
  // }
});

// Charity sign terms of services API route
router.post("/tos/:id", async (req, res) => {
  const charity = await Charities.findByIdWithToken(req.params.id);
  if (charity) {
    try {
      const signedTOS = await signTOS(charity.stripeToken, req);
      if (signedTOS) {
        const updatedCharity = await Charities.update(req.params.id, {
          termsAccepted: true
        });
        if (updatedCharity) {
          res.status(200).json({
            error: false,
            message: "The terms of service were successfully updated.",
            charity: updatedCharity
          });
        } else {
          res.status(500).json({
            error: true,
            message:
              "There was an error updating your account. Please contact Burning Heart.",
            charity: {}
          });
        }
      } else {
        res.status(500).json({
          error: true,
          message: "There was an error accepting the terms of service.",
          charity: {}
        });
      }
    } catch (error) {
      res.status(500).json({
        error: true,
        message: "There was an error accepting the terms of service.",
        charity: {}
      });
    }
  } else {
    res.status(500).json({
      error: true,
      message: "There was an error accepting the terms of service.",
      charity: {}
    });
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
