exports.seed = function(knex, Promise) {
  return knex("donations")
    .del()
    .then(function() {
      return knex("donations").insert([
        { amount: 5.88, charityId: 1, userId: 1 },
        { amount: 30.29, charityId: 4, userId: 2 },
        { amount: 15.47, charityId: 6, userId: 3 },
        { amount: 3.2, charityId: 8, userId: 4 },
        { amount: 10.0, charityId: 2, userId: 1 },
        { amount: 19.0, charityId: 3, userId: 2 },
        { amount: 28.0, charityId: 4, userId: 3 },
        { amount: 4.35, charityId: 1, userId: 4 },
        { amount: 2.9, charityId: 5, userId: 1 },
        { amount: 30.48, charityId: 1, userId: 2 },
        { amount: 20.47, charityId: 4, userId: 3 },
        { amount: 41.94, charityId: 9, userId: 4 },
        { amount: 28.69, charityId: 14, userId: 1 },
        { amount: 2.34, charityId: 15, userId: 2 },
        { amount: 46.0, charityId: 13, userId: 3 },
        { amount: 75.38, charityId: 18, userId: 4 },
        { amount: 1.01, charityId: 18, userId: 1 },
        { amount: 874.28, charityId: 19, userId: 2 },
        { amount: 5.43, charityId: 9, userId: 3 },
        { amount: 103.42, charityId: 2, userId: 4 },
        { amount: 67.11, charityId: 23, userId: 1 },
        { amount: 48.32, charityId: 24, userId: 2 },
        { amount: 32.45, charityId: 24, userId: 3 },
        { amount: 68.38, charityId: 24, userId: 4 },
        { amount: 11.0, charityId: 28, userId: 1 },
        { amount: 47.37, charityId: 27, userId: 2 },
        { amount: 69.23, charityId: 29, userId: 3 },
        { amount: 23.69, charityId: 31, userId: 4 },
        { amount: 18.45, charityId: 30, userId: 1 },
        { amount: 23.14, charityId: 32, userId: 2 },
        { amount: 16.48, charityId: 36, userId: 3 },
        { amount: 9.78, charityId: 7, userId: 4 }
      ]);
    });
};
