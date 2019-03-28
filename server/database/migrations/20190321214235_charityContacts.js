exports.up = function(knex, Promise) {
  return knex.schema.createTable("charityContacts", tbl => {
    tbl.increments("id");
    tbl
      .integer("charityId")
      .unsigned()
      .references("id")
      .inTable("charities")
      .onDelete("CASCADE")
      .notNullable();
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
    tbl.string("driversLicense", 128);
    tbl.timestamps(true, true);
    tbl.unique("accountId", "uq_charityContacts_accountId");
    tbl.unique("charityId", "uq_charityContacts_charityId");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("charityContacts");
};
