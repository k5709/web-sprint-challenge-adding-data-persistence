// build your `Project` model here
const db = require("../../data/dbConfig");

async function getAll() {
  const projects = await db("projects");
  return projects.map((project) => {
    return {
      ...project,
      project_completed: project.project_completed === 1,
    };
  });
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
