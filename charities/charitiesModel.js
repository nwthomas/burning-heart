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
  const { charityName, phone, street1, street2, city, state, zip } = charity;
  return db("charities")
    .insert(charity)
    .then(id => {
      return db("charities").where({
        charityName,
        phone,
        street1,
        street2,
        city,
        state,
        zip
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
        .first();
    });
}

function remove(id) {
  return db("charities")
    .where({ id })
    .del();
}
