exports.up = function (knex) {
  return knex.schema.createTable("resources", (table) => {
    table.increments("resource_id"); // primary key
    table.string("resource_name", 128).notNullable().unique();
    table.string("resource_description", 255);
  });
};

exports.down = async function (knex) {
  return await knex.schema.dropTableIfExists("resources");
};
