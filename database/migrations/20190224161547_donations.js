exports.up = function(knex, Promise) {
  return knex.schema.createTable("donations", tbl => {
    tbl.increments("id");
    tbl.integer("amount");
    tbl.integer("charity_id").unsigned();
    tbl.integer("user_id").unsigned();
    tbl.timestamps(true, true);
    tbl.foreign("charity_id").references("charities.id");
    tbl.foreign("user_id").references("users.id");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("donations");
};
