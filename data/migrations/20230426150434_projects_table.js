exports.up = function (knex) {
  return knex.schema.createTable("projects", function (table) {
    table.increments("project_id");
    table.string("project_name", 200).notNullable();
    table.string("project_description", 200);
    table.integer("project_completed").defaultTo(false);
  });
};

exports.down = async function (knex) {
  await knex.schema
    // .dropTableIfExists("project_resources")
    // .dropTableIfExists("tasks")
    // .dropTableIfExists("resources")
    .dropTableIfExists("projects");
};
