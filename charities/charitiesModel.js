const db = require("../database/dbConfig.js");

module.exports = {
  find,
  findWithPassword,
  findById,
  insert,
  remove,
  update
};

function find() {
  return db("charities").select(
    "id",
    "charityName",
    "phone",
    "street1",
    "street2",
    "city",
    "state",
    "zip",
    "type",
    "registered",
    "ownerAdded",
    "termsAccepted",
    "created_at",
    "updated_at"
  );
}

function findWithPassword() {
  return db("charities");
}

function findById(id) {
  return db("charities")
    .where({ id })
    .first()
    .select(
      "id",
      "username",
      "charityName",
      "phone",
      "street1",
      "street2",
      "city",
      "state",
      "zip",
      "type",
      "registered",
      "ownerAdded",
      "termsAccepted",
      "created_at",
      "updated_at"
    );
}

function insert(charity) {
  console.log(charity);
  const { charityName, username } = charity;
  return db("charities")
    .insert(charity)
    .then(id => {
      return db("charities").where({
        charityName,
        username
      });
    });
}

function update(id, changes) {
  return db("charities")
    .where({ id })
    .update(changes)
    .then(updated => {
      return db("charities")
        .where({ id })
        .first()
        .select(
          "id",
          "charityName",
          "username",
          "phone",
          "street1",
          "street2",
          "city",
          "state",
          "zip",
          "created_at",
          "updated_at"
        );
    });
}

function remove(id) {
  return db("charities")
    .where({ id })
    .del();
}
