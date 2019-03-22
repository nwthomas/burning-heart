exports.up = function(knex, Promise) {
  return knex.schema.createTable("users", tbl => {
    tbl.increments("id");
    tbl
      .integer("accountId")
      .unsigned()
      .references("id")
      .inTable("accounts")
      .onDelete("CASCADE")
      .notNullable();
    tbl.string("firstName", 256);
    tbl.string("middleName", 256);
    tbl.string("lastName", 256);
    tbl.integer("phone").unsigned();
    tbl.timestamps(true, true);
    tbl.unique("username", "uq_user_username");
    tbl.unique("accountId", "uq_user_accountId");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("users");
};
