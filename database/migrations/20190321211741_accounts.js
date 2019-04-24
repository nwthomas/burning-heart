exports.up = function(knex, Promise) {
  return knex.schema.createTable("accounts", tbl => {
    tbl.increments("id");
    tbl.string("username", 128).notNullable();
    tbl.string("password", 255).notNullable();
    tbl.string("firstName", 256);
    tbl.string("middleName", 256);
    tbl.string("lastName", 256);
    tbl.string("email", 128).notNullable();
    tbl.string("phone", 256);
    tbl.string("type", 128);
    tbl
      .integer("charityId")
      .unsigned()
      .references()
      .inTable("charities")
      .onDelete("CASCADE");
    tbl.timestamps(true, true);
    tbl.unique("username", "uq_accounts_username");
    tbl.unique("phone", "uq_accounts_phone");
    tbl.unique("email", "uq_accounts_email");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("accounts");
};
