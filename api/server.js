const express = require("express");
const configureMiddleware = require("./middleware.js"); // General middelware import
const restricted = require("../auth/restricted.js"); // Auth JWT import
const authRouter = require("../auth/authRouter.js");
const usersRouter = require("../users/usersRouter.js");
const charitiesRouter = require("../charities/charitiesRouter.js");
const server = express();

// Pass server through general middleware configurations
configureMiddleware(server);

// Custom API routes
server.use("/api/restricted/charities", restricted, charitiesRouter);
server.use("/api/restricted/users", restricted, usersRouter);
server.use("/api/auth", authRouter);

// Single test server / route
server.get("/", (req, res) => {
  res.send("The Burning Server is up and running! 🔥");
});

module.exports = server;
