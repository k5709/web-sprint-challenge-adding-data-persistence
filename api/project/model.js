// build your `Project` model here
const db = require("../../data/dbConfig");

function getProjectsById(project_id) {
  return db("projects").where({ project_id: project_id }).first();
}

module.exports = { getProjectsById };
