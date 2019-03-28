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

function insert(charity) {
  return db("charities")
    .insert(charity)
    .then(id => {
      return db("charities")
        .where({ id: id[0] })
        .first();
    });
}

function update(id, changes) {
  return db("charities")
    .where({ id })
    .update(changes)
    .then(updated => {
      return db("charities")
        .where({ id })
        .first();
    });
}

function remove(id) {
  return db("charities")
    .where({ id })
    .del();
}
