exports.up = function(knex, Promise) {
  return knex.schema.createTable("donations", tbl => {
    tbl.increments("id");
    tbl
      .integer("charityId")
      .unsigned()
      .references("id")
      .inTable("charities")
      .onDelete("CASCADE")
      .notNullable();
    tbl
      .integer("userId")
      .unsigned()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE")
      .notNullable();
    tbl.integer("amount");
    tbl.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("donations");
};
