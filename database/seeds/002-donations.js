exports.seed = function(knex, Promise) {
  return knex("donations")
    .del()
    .then(function() {
      return knex("donations").insert([
        { amount: 5.88, charity_id: 1, user_id: 1 },
        { amount: 30.29, charity_id: 4, user_id: 2 },
        { amount: 15.47, charity_id: 6, user_id: 3 },
        { amount: 3.2, charity_id: 8, user_id: 4 },
        { amount: 10.0, charity_id: 2, user_id: 1 },
        { amount: 19.0, charity_id: 3, user_id: 2 },
        { amount: 28.0, charity_id: 4, user_id: 3 },
        { amount: 4.35, charity_id: 1, user_id: 4 },
        { amount: 2.9, charity_id: 5, user_id: 1 },
        { amount: 30.48, charity_id: 1, user_id: 2 },
        { amount: 20.47, charity_id: 4, user_id: 3 },
        { amount: 41.94, charity_id: 9, user_id: 4 },
        { amount: 28.69, charity_id: 14, user_id: 1 },
        { amount: 2.34, charity_id: 15, user_id: 2 },
        { amount: 46.0, charity_id: 13, user_id: 3 },
        { amount: 75.38, charity_id: 18, user_id: 4 },
        { amount: 1.01, charity_id: 18, user_id: 1 },
        { amount: 874.28, charity_id: 19, user_id: 2 },
        { amount: 5.43, charity_id: 9, user_id: 3 },
        { amount: 103.42, charity_id: 2, user_id: 4 },
        { amount: 67.11, charity_id: 23, user_id: 1 },
        { amount: 48.32, charity_id: 24, user_id: 2 },
        { amount: 32.45, charity_id: 24, user_id: 3 },
        { amount: 68.38, charity_id: 24, user_id: 4 },
        { amount: 11.0, charity_id: 28, user_id: 1 },
        { amount: 47.37, charity_id: 27, user_id: 2 },
        { amount: 69.23, charity_id: 29, user_id: 3 },
        { amount: 23.69, charity_id: 31, user_id: 4 },
        { amount: 18.45, charity_id: 30, user_id: 1 },
        { amount: 23.14, charity_id: 32, user_id: 2 },
        { amount: 16.48, charity_id: 36, user_id: 3 },
        { amount: 9.78, charity_id: 7, user_id: 4 }
      ]);
    });
};
