const bcrypt = require("bcryptjs");

exports.seed = function(knex, Promise) {
  return knex("users")
    .truncate()
    .then(function() {
      return knex("users").insert([
        {
          first_name: "Nathan",
          last_name: "Thomas",
          username: "nwthomas",
          password: bcrypt.hashSync("asdfasdf", 14)
        },
        {
          first_name: "Admin",
          last_name: "Admin",
          username: "admin",
          password: bcrypt.hashSync("password", 14)
        },
        {
          first_name: "Veronica",
          last_name: "Smith",
          username: "vero2019",
          password: bcrypt.hashSync("password", 14)
        },
        {
          first_name: "Steven",
          last_name: "Taylor",
          username: "staytay",
          password: bcrypt.hashSync("password", 14)
        }
      ]);
    });
};
