exports.up = function (knex) {
  return knex.schema.createTable("resources", (table) => {
    table.increments("resource_id"); // primary key
    table.string("resource_name").notNullable().unique();
    table.string("resource_description");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("resources");
};
