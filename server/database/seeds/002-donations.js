exports.seed = function(knex, Promise) {
  return knex("donations")
    .del()
    .then(function() {
      return knex("donations").insert([
        { amount: 5.88, charityId: 1, accountId: 1 },
        { amount: 30.29, charityId: 4, accountId: 2 },
        { amount: 15.47, charityId: 6, accountId: 3 },
        { amount: 3.2, charityId: 8, accountId: 4 },
        { amount: 10.0, charityId: 2, accountId: 1 },
        { amount: 19.0, charityId: 3, accountId: 2 },
        { amount: 28.0, charityId: 4, accountId: 3 },
        { amount: 4.35, charityId: 1, accountId: 4 },
        { amount: 2.9, charityId: 5, accountId: 1 },
        { amount: 30.48, charityId: 1, accountId: 2 },
        { amount: 20.47, charityId: 4, accountId: 3 },
        { amount: 41.94, charityId: 9, accountId: 4 },
        { amount: 28.69, charityId: 14, accountId: 1 },
        { amount: 2.34, charityId: 15, accountId: 2 },
        { amount: 46.0, charityId: 13, accountId: 3 },
        { amount: 75.38, charityId: 18, accountId: 4 },
        { amount: 1.01, charityId: 18, accountId: 1 },
        { amount: 874.28, charityId: 19, accountId: 2 },
        { amount: 5.43, charityId: 9, accountId: 3 },
        { amount: 103.42, charityId: 2, accountId: 4 },
        { amount: 67.11, charityId: 23, accountId: 1 },
        { amount: 48.32, charityId: 24, accountId: 2 },
        { amount: 32.45, charityId: 24, accountId: 3 },
        { amount: 68.38, charityId: 24, accountId: 4 },
        { amount: 11.0, charityId: 28, accountId: 1 },
        { amount: 47.37, charityId: 27, accountId: 2 },
        { amount: 69.23, charityId: 29, accountId: 3 },
        { amount: 23.69, charityId: 31, accountId: 4 },
        { amount: 18.45, charityId: 30, accountId: 1 },
        { amount: 23.14, charityId: 32, accountId: 2 },
        { amount: 16.48, charityId: 36, accountId: 3 },
        { amount: 9.78, charityId: 7, accountId: 4 }
      ]);
    });
};
