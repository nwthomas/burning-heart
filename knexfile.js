require("dotenv").config();

// Postgres imports
const pg = require("pg");
pg.defaults.ssl = true;

// Production database connection
const dbConnection = process.env.DATABASE_URL || {
  filename: "./database/burningHeart.db3"
};

module.exports = {
  development: {
    client: "pg",
    useNullAsDefault: true,
    connection: dbConnection,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: "./database/migrations",
      tableName: "knex_migrations"
    },
    seeds: {
      directory: "./database/seeds"
    }
  },
  testing: {
    client: "sqlite3",
    connection: {
      filename: "./database/test.db3"
    },
    migrations: {
      directory: "./database/migrations",
      tableName: "knex_migrations"
    },
    seeds: {
      directory: "./database/seeds"
    },
    useNullAsDefault: true
  },
  production: {
    client: "pg",
    useNullAsDefault: true,
    connection: dbConnection,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: "./database/migrations",
      tableName: "knex_migrations"
    },
    seeds: {
      directory: "./database/seeds"
    }
  }
};
