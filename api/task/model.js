// build your `Task` model here
// build your `Project` model here
const db = require("../../data/dbConfig");

async function getAll() {
  const tasks = await db("tasks as t")
    .join("projects as p", "t.project_id", "p.project_id")
    .select(
      "t.task_id",
      "t.task_description",
      "t.task_notes",
      "t.task_completed",
      "p.project_name",
      "p.project_description"
    );
  return tasks;
}

function findById(id) {
  return db("tasks").where({ project_id: id }).first();
}

function insert(project) {
  return db("tasks")
    .insert(project)
    .then(([id]) => {
      return findById(id);
    });
}

module.exports = { findById, getAll, insert };
