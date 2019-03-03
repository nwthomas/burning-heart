module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./database/burningHeart.db3"
    },
    migrations: {
      directory: "./database/migrations"
    },
    seeds: {
      directory: "./database/seeds"
    },
    useNullAsDefault: true
  }
};
