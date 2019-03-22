exports.seed = function(knex, Promise) {
  return knex("users")
    .del()
    .then(function() {
      return knex("users").insert([
        {
          accountId: 1,
          firstName: "Nathan",
          middleName: "William",
          lastName: "Thomas",
          phone: 7074932054
        },
        {
          accountId: 2,
          firstName: "Admin",
          middleName: "Admin",
          lastName: "Admin",
          phone: 9098832912
        },
        {
          accountId: 3,
          firstName: "Veronica",
          middleName: "Mary",
          lastName: "Smith",
          phone: 3037892873
        },
        {
          accountId: 4,
          firstName: "Steven",
          middleName: "James",
          lastName: "Taylor",
          phone: 5108943782
        }
      ]);
    });
};
