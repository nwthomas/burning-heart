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
        }
      ]);
    });
};
