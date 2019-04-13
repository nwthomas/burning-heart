exports.up = function(knex, Promise) {
  return knex.schema.createTable("accounts", tbl => {
    tbl.increments("id");
    tbl.string("username", 128);
    tbl.string("password", 255);
    tbl.string("firstName", 256);
    tbl.string("middleName", 256);
    tbl.string("lastName", 256);
    tbl.string("email", 128);
    tbl.string("phone", 256);
    tbl.string("type", 128);
    tbl
      .integer("charityId")
      .unsigned()
      .references("id")
      .inTable("charities")
      .onDelete("CASCADE");
    tbl.string("driversLicense", 128);
    tbl.timestamps(true, true);
    tbl.unique("username", "uq_account_username");
    tbl.unique("phone", "uq_account_phone");
    tbl.unique("email", "uq_account_email");
    tbl.unique("driversLicense", "uq_account_driversLicense");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("accounts");
};
