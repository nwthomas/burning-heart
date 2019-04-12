const express = require("express");
const configureMiddleware = require("./middleware.js"); // General middleware import
const restricted = require("../auth/restricted.js"); // Auth JWT import
const authRouter = require("../auth/authRouter.js");
const charitiesRouter = require("../charities/charitiesRouter.js");
const donationsRouter = require("../donations/donationsRouter.js");
const accountsRouter = require("../accounts/accountsRouter.js");
const server = express();

// Pass server through general middleware configurations
configureMiddleware(server);

// RESTful API routes
server.use("/api/restricted/charities", restricted, charitiesRouter);
server.use("/api/restricted/donations", restricted, donationsRouter);
server.use("/api/restricted/accounts", accountsRouter);
server.use("/api/auth", authRouter);

// Single test server / route
server.get("/", (req, res) => {
  console.log(req.body);
  res.send("The Burning Server is up and running! 🔥");
});

module.exports = server;
