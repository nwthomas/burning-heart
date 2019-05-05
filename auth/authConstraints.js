const Accounts = require("../accounts/accountsModel.js");

module.exports = authConstraintsDonor;

// Splits to two smaller functions to separately check for duplicate username and email
async function authConstraintsDonor(req, res, next) {
  console.log("Working!");
  const {
    username,
    password,
    firstName,
    middleName,
    lastName,
    email,
    phone
  } = req.body;
  if (
    !username ||
    !password ||
    !firstName ||
    !middleName ||
    !lastName ||
    !email ||
    !phone
  ) {
    return res.status(406).json({
      error: true,
      account: {},
      message: "Please include the required credentials and try again."
    });
  }

  const usernameCheck = await checkForUsername(username);
  const emailCheck = await checkForEmail(email);
  if (usernameCheck && emailCheck) {
    res.status(409).json({
      error: true,
      usernameError: true,
      emailError: true,
      message: "Sorry, that username and email already exist."
    });
  } else if (usernameCheck) {
    res.status(409).json({
      error: true,
      usernameError: true,
      emailError: false,
      message: "Sorry, that username already exists."
    });
  } else if (emailCheck) {
    res.status(409).json({
      error: true,
      usernameError: false,
      emailError: true,
      message: "Sorry, that email already exists."
    });
  } else {
    next();
  }
}

// Returns boolean flag after checking the database
async function checkForUsername(username) {
  const foundUsername = await Accounts.find().where({ username });
  return foundUsername.length ? true : false;
}

// Returns boolean flag after checking the database
async function checkForEmail(email) {
  const foundEmail = await Accounts.find().where({ email });
  return foundEmail.length ? true : false;
}
