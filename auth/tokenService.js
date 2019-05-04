const jwt = require("jsonwebtoken");

const secrets = require("../config/secrets.js");

module.exports = {
  generateTokenAccount,
  generateTokenCharity
};

function generateTokenAccount(account) {
  const payload = {
    subject: account.id,
    username: account.username,
    type: account.type ? account.type : "charity"
    // Include other data as is needed
  };

  // Change to shorter timespan for production
  const options = {
    expiresIn: "1d"
  };

  // Returns a completed token to where this function is imported
  return jwt.sign(payload, secrets.jwtSecret, options);
}

function generateTokenCharity(charity) {
  const payload = {
    subject: charity.id,
    username: charity.username,
    type: charity.type
    // Include other data as is needed
  };

  // Change to shorter timespan for production
  const options = {
    expiresIn: "1d"
  };

  // Returns a completed token to where this function is imported
  return jwt.sign(payload, secrets.jwtSecret, options);
}
