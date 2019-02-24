const express = require("express");
const server = express();

server.get("/", (req, res) => {
  res.send("The Burning Server is up and running!");
});

module.exports = server;
