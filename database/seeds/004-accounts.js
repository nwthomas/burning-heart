exports.seed = function(knex, Promise) {
  return knex("accounts")
    .del()
    .then(function() {
      return knex("accounts").insert([
        {
          username: "nwthomas",
          password: bcrypt.hashSync("asdfasdf", 14),
          email: "email@me.com"
        },
        {
          username: "admin",
          password: bcrypt.hashSync("password", 14),
          email: "admin@gmail.com"
        },
        {
          username: "vero2019",
          password: bcrypt.hashSync("password", 14),
          email: "vero2019@gmail.com"
        },
        {
          username: "staytay",
          password: bcrypt.hashSync("password", 14),
          email: "candycane301@gmail.com"
        }
      ]);
    });
};
