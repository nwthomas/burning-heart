exports.up = function(knex, Promise) {
  return knex.schema.createTable("creditCards", tbl => {
    tbl.increments("id");
    tbl.bigInteger("cardNumber").notNullable();
    tbl.string("expDate", 128).notNullable();
    tbl
      .integer("securityCode")
      .unsigned()
      .notNullable();
    tbl
      .integer("accountId")
      .unsigned()
      .references()
      .inTable("accounts")
      .onDelete("CASCADE")
      .notNullable();
    tbl.string("cardName", 256).notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("creditCards");
};
