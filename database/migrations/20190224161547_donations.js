exports.up = function(knex, Promise) {
  return knex.schema.createTable("donations", tbl => {
    tbl.increments("id");
    tbl
      .integer("charityId")
      .unsigned()
      .references("id")
      .inTable("charities");
    tbl
      .integer("accountId")
      .unsigned()
      .references("id")
      .inTable("accounts");
    tbl.integer("amount");
    tbl.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("donations");
};
