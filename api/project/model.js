// build your `Project` model here
const db = require("../../data/dbConfig");

function getAll() {
  return db("projects");
}

function findById(id) {
  return db("projects").where({ project_id: id }).first();
}

function insert(project) {
  return db("projects")
    .insert(project)
    .then(([id]) => {
      return findById(id);
    });
}

module.exports = { findById, getAll, insert };
