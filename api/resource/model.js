const db = require("../../data/dbConfig");

function getAll() {
  return db("resources");
}

function findById(id) {
  return db("resources").where({ resource_id: id }).first();
}

function insert(resource) {
  return db("resources")
    .insert(resource)
    .then(([id]) => {
      return findById(id);
    });
}

module.exports = { findById, getAll, insert };
