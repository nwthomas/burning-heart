const db = require("../database/dbConfig.js");

module.exports = {
  find,
  findByAccountId,
  findByCharityId,
  findById,
  insert,
  remove,
  update
};

function find() {
  return db("donations");
}

function findByAccountId(accountId) {
  return db("donations")
    .where({ accountId })
    .innerJoin("charities", "donations.charityId", "charities.id");
}

function findByCharityId(charityId) {
  return db("donations").where({ charityId });
}

function findById(id) {
  return db("donations")
    .where({ id })
    .first();
}

function insert(donation) {
  const { charityId, accountId, amount } = donation;
  return db("donations")
    .insert(donation)
    .then(id => {
      return db("donations").where({ charityId, accountId, amount });
    });
}

function update(id, donation) {
  return db("donations")
    .where({ id })
    .update(donation)
    .then(updated => {
      return db("donations")
        .where({ id })
        .first();
    });
}

function remove(id) {
  return db("donations")
    .where({ id })
    .del();
}
