const jwt = require("jsonwebtoken");

const secrets = require("../config/secrets.js");

module.exports = {
  generateToken
};

function generateToken(account) {
  const payload = {
    subject: account.id,
    username: account.username,
    type: account.type
    // Include other data as is needed
  };

  // Change to shorter timespan for production
  const options = {
    expiresIn: "1d"
  };

  // Returns a completed token to where this function is imported
  return jwt.sign(payload, secrets.jwtSecret, options);
}
