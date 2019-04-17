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

function findWithPassword(username) {
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
      "created_at",
      "updated_at"
    );
}

function insert(account) {
  const { username, firstName, middleName, lastName, email, phone } = account;
  return db("accounts")
    .insert(account)
    .then(id => {
      return db("accounts")
        .where({
          username,
          firstName,
          middleName,
          lastName,
          email,
          phone
        })
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
        )
        .first();
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
