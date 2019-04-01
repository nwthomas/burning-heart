// This file connects to the remote Prisma DB and gives us the ability to query it with JS
const { Prisma } = require("prisma-binding");

const db = new Prisma({
  typeDefs: "src/generated/prisma.graphql", // Type definitions so Yoga knows the GraphQL definitions
  endpoint: process.env.PRISMA_ENDPOINT, // Same endpoint as stored in .env
  secret: process.env.PRISMA_SECRET, // Secret key to access Prisma DB
  debug: true // Console.log() all server requests
});

module.exports = db;
