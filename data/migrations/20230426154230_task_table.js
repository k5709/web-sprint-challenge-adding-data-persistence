exports.up = function (knex) {
  return knex.schema.createTable("tasks", (table) => {
    table.increments("task_id"); // primary key
    table.string("task_description", 200).notNullable();
    table.string("task_notes", 200);
    table.boolean("task_completed").defaultTo(false);
    table
      .integer("project_id")
      .unsigned()
      .notNullable()
      .references("project_id")
      .inTable("projects");
  });
};

exports.down = async function (knex) {
  return await knex.schema.dropTableIfExists("tasks");
};
