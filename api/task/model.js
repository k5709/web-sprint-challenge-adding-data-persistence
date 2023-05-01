// build your `Task` model here
// build your `Project` model here
const db = require("../../data/dbConfig");

// async function getAll() {
async function getAll() {
  const rows = await db("tasks as t")
    .join("projects as p", "p.project_id", "t.project_id")
    .select("t.*", "p.project_name", "p.project_description");
  return rows.map((item) => {
    return {
      ...item,
      task_completed: item.task_completed ? true : false,
    };
  });
}

async function findById(id) {
  const row = await db("tasks as t")
    .join("projects as p", "p.project_id", "t.project_id")
    .select("t.*", "p.project_name", "p.project_description")
    .where("task_id", id)
    .first();
  return {
    ...row,
    task_completed: row.task_completed ? true : false,
  };
}

function insert(project) {
  return db("tasks")
    .insert(project)
    .then(([id]) => {
      return findById(id);
    });
}

module.exports = { findById, getAll, insert };
