exports.up = function (knex) {
  return knex.schema.createTable("projects", function (table) {
    table.increments("project_id").primary();
    table.string("project_name").notNullable();
    table.text("project_description");
    table.boolean("project_completed").defaultTo(false);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("projects");
};
