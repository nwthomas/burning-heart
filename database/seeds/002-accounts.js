const bcrypt = require("bcryptjs");

exports.seed = function(knex, Promise) {
  return knex("accounts")
    .del()
    .then(function() {
      return knex("accounts").insert([
        {
          username: "nwthomas",
          password: bcrypt.hashSync("password", 14),
          firstName: "Nathan",
          middleName: "William",
          lastName: "Thomas",
          email: "email@me.com",
          phone: "(707) 493-2054",
          type: "user"
        },
        {
          username: "admin",
          password: bcrypt.hashSync("password", 14),
          firstName: "Admin",
          middleName: "Admin",
          lastName: "Admin",
          email: "admin@gmail.com",
          phone: "(909) 883-2912",
          type: "user"
        },
        {
          username: "vero2019",
          password: bcrypt.hashSync("password", 14),
          firstName: "Veronica",
          middleName: "Mary",
          lastName: "Smith",
          phone: "(303) 789-2873",
          email: "vero2019@gmail.com",
          type: "charity"
        },
        {
          username: "staytay",
          password: bcrypt.hashSync("password", 14),
          firstName: "Steven",
          middleName: "James",
          lastName: "Taylor",
          phone: "(510) 894-3782",
          email: "candycane301@gmail.com",
          type: "charity"
        }
      ]);
    });
};
