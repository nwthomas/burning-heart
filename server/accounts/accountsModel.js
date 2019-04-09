const db = require("../database/dbConfig.js");

module.exports = {
  find,
  findById,
  findWithPassword,
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

function findWithPassword() {
  return db("accounts");
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
  console.log(creds);
  return db("accounts")
    .insert(creds)
    .then(id => {
      console.log();
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
    .then(res => {
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
