exports.seed = function(knex, Promise) {
  return knex("creditCards")
    .del()
    .then(function() {
      return knex("creditCards").insert([
        {
          cardNumber: 000000000000,
          expDate: "12/2019",
          securityCode: 342,
          accountId: 1,
          cardName: "Nathan William Thomas"
        },
        {
          cardNumber: 111111111111,
          expDate: "03/2020",
          securityCode: 909,
          accountId: 2,
          cardName: "Admin Admin Admin"
        }
      ]);
    });
};
