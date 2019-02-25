const express = require("express");
const server = express();
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
server.use(cors());
server.use(helmet());
server.use(morgan());

server.get("/", (req, res) => {
  res.send("The Burning Server is up and running!");
});

module.exports = server;
