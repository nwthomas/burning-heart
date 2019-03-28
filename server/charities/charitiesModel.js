const db = require("../database/dbConfig.js");

module.exports = {
  find,
  findById,
  insert,
  remove,
  update
};

function find() {
  return db("charities");
}

function findById(id) {
  return db("charities")
    .where({ id })
    .first();
}

function insert(profile) {
  return db("charities")
    .insert(profile)
    .then(ids => ids);
}

function update(id, changes) {
  return db("charities")
    .where({ id })
    .update(changes);
}

function remove(id) {
  return db("charities")
    .where({ id })
    .del();
}
