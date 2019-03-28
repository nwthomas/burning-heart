const knex = require("knex");
require("dotenv").config();

const db = process.env.DB_ENV || "development"; // Setup for Heroku postgres deployment

const knexConfig = require("../knexfile.js")[db]; // DB environment assignment

// Export new knex configuration
module.exports = knex(knexConfig);
