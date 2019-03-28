const db = require("../database/dbConfig.js");

module.exports = {
  find,
  findById,
  insert,
  remove,
  update
};

function find() {
  return db("accounts");
}

function findById(id) {
  return db("accounts")
    .where({ id })
    .first();
}

function insert(creds) {
  return db("accounts")
    .insert(creds)
    .then(ids => ids);
}

function update(id, changes) {
  return db("accounts")
    .where({ id })
    .update(changes);
}

function remove(id) {
  return db("accounts")
    .where({ id })
    .del();
}
