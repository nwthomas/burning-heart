exports.up = function(knex, Promise) {
  return knex.schema.createTable("users", tbl => {
    tbl.increments("id");
    tbl.string("first_name", 128);
    tbl.string("last_name", 128);
    tbl.string("username", 128);
    tbl.string("password", 128);
    tbl.unique("username", "uq_user_username");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("users");
};
