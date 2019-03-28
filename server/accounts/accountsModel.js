const db = require("../database/dbConfig.js");

module.exports = {
  find,
  findById,
  insert,
  remove,
  update
};

function find() {
  return db("accounts").select(
    "id",
    "username",
    "firstName",
    "middleName",
    "lastName",
    "email",
    "phone",
    "type",
    "charityId",
    "created_at",
    "updated_at"
  );
}

function findById(id) {
  return db("accounts")
    .where({ id })
    .first()
    .select(
      "id",
      "username",
      "firstName",
      "middleName",
      "lastName",
      "email",
      "phone",
      "type",
      "charityId",
      "created_at",
      "updated_at"
    );
}

function insert(creds) {
  return db("accounts")
    .insert(creds)
    .then(id => {
      return db("accounts")
        .where({ id: id[0] })
        .select(
          "id",
          "username",
          "firstName",
          "middleName",
          "lastName",
          "email",
          "phone",
          "type",
          "charityId",
          "created_at",
          "updated_at"
        );
    });
}

function update(id, changes) {
  return db("accounts")
    .where({ id })
    .update(changes)
    .then(id => {
      return db("accounts")
        .where({ id })
        .first()
        .select(
          "id",
          "username",
          "firstName",
          "middleName",
          "lastName",
          "email",
          "phone",
          "type",
          "charityId",
          "created_at",
          "updated_at"
        );
    });
}

function remove(id) {
  return db("accounts")
    .where({ id })
    .del();
}
