exports.up = function(knex, Promise) {
  return knex.schema.createTable("donations", tbl => {
    tbl.increments("id");
    tbl
      .integer("charityId")
      .unsigned()
      .references()
      .inTable("charities")
      .onDelete("CASCADE")
      .notNullable();
    tbl
      .integer("accountId")
      .unsigned()
      .references()
      .inTable("accounts")
      .onDelete("CASCADE")
      .notNullable();
    tbl.integer("amount").notNullable();
    tbl.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("donations");
};
