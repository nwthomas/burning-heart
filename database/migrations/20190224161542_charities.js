exports.up = function(knex, Promise) {
  return knex.schema.createTable("charities", tbl => {
    tbl.increments("id");
    tbl.string("username", 128).notNullable();
    tbl.string("password", 255).notNullable();
    tbl.string("charityName", 256).notNullable();
    tbl.string("phone", 256).notNullable();
    tbl.string("street1", 256);
    tbl.string("street2", 256);
    tbl.string("city", 256);
    tbl.string("state", 128);
    tbl.string("zip", 128);
    tbl.string("stripeToken", 256);
    tbl.timestamps(true, true);
    tbl.unique("charityName", "uq_charities_name");
    tbl.unique("phone", "uq_charities_phone");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("charities");
};
