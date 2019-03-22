module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./database/burningHeart.db3"
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
    client: "sqlite3",
    useNullAsDefault: true,
    connection: {
      database: "./database/users.db3"
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
