exports.up = function(knex, Promise) {
  return knex.schema.createTable("accounts", tbl => {
    tbl.increments("id");
    tbl.string("username", 128);
    tbl.string("password", 255);
    tbl.string("email", 128);
    tbl.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("accounts");
};
