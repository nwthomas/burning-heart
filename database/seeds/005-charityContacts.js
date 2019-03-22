const faker = require("faker");

exports.seed = function(knex, Promise) {
  return knex("charityContacts")
    .del()
    .then(function() {
      return knex("charityContacts").insert([
        {
          charityId: 2,
          accountId: 3,
          firstName: "Veronica",
          middleName: "Mary",
          lastName: "Smith",
          phone: 3037892873,
          driversLicense: "D73DH8KA90"
        },
        {
          charityId: 1,
          accountId: 4,
          firstName: "Steven",
          middleName: "James",
          lastName: "Taylor",
          phone: 5108943782,
          driversLicense: "D73DH8KA99"
        }
      ]);
    });
};
