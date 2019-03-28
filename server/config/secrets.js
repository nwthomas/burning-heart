require("dotenv").config();

// Export a secret for the JSON Web Token
module.exports = {
  jwtSecret: process.env.JWT_SECRET || "Add a secret to your .env file."
};
