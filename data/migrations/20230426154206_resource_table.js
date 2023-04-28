exports.up = function (knex) {
  return knex.schema.createTable("resources", (table) => {
    table.increments("resource_id"); // primary key
    table.string("resource_name").notNullable().unique();
    table.string("resource_description", 200);
  });
};

exports.down = async function (knex) {
  return await knex.schema.dropTableIfExists("resources");
};
