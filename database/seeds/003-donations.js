exports.seed = function(knex, Promise) {
  return knex("donations")
    .del()
    .then(function() {
      return knex("donations").insert([
        { amount: 588, charityId: 1, accountId: 1 },
        { amount: 3029, charityId: 4, accountId: 2 },
        { amount: 1547, charityId: 6, accountId: 3 },
        { amount: 320, charityId: 8, accountId: 1 },
        { amount: 1000, charityId: 2, accountId: 1 },
        { amount: 1900, charityId: 3, accountId: 2 },
        { amount: 2800, charityId: 4, accountId: 3 },
        { amount: 435, charityId: 1, accountId: 1 },
        { amount: 290, charityId: 5, accountId: 1 },
        { amount: 3048, charityId: 1, accountId: 2 },
        { amount: 2047, charityId: 4, accountId: 3 },
        { amount: 4194, charityId: 9, accountId: 1 },
        { amount: 2869, charityId: 14, accountId: 1 },
        { amount: 234, charityId: 15, accountId: 2 },
        { amount: 4600, charityId: 13, accountId: 3 },
        { amount: 7538, charityId: 18, accountId: 1 },
        { amount: 101, charityId: 18, accountId: 1 },
        { amount: 87428, charityId: 19, accountId: 2 },
        { amount: 543, charityId: 9, accountId: 3 },
        { amount: 10342, charityId: 2, accountId: 1 },
        { amount: 6711, charityId: 23, accountId: 1 },
        { amount: 4832, charityId: 24, accountId: 2 },
        { amount: 3245, charityId: 24, accountId: 3 },
        { amount: 6838, charityId: 24, accountId: 1 },
        { amount: 1100, charityId: 28, accountId: 1 },
        { amount: 4737, charityId: 27, accountId: 2 },
        { amount: 6923, charityId: 29, accountId: 3 },
        { amount: 2369, charityId: 31, accountId: 1 },
        { amount: 1845, charityId: 30, accountId: 1 },
        { amount: 2314, charityId: 32, accountId: 2 },
        { amount: 1648, charityId: 30, accountId: 3 },
        { amount: 978, charityId: 7, accountId: 1 }
      ]);
    });
};
