exports.up = function (knex) {
  return knex.schema.createTable("supplies", (tbl) => {
    tbl.increments();
    tbl.string("item").notNullable();
    tbl.integer("quantity").notNullable().defaultTo(1);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("supplies");
};
