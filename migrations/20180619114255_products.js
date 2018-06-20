
exports.up = function(knex, Promise) {
  //what should happen - creation
  return knex.schema.createTable('products', (table) => {
    table.increments()
    table.string('title').notNullable()
    table.text('description')
    table.decimal('price') //.notNullable()
    table.integer('stock')
    table.string('catagory')
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
// what actions should occur
  return knex.schema.dropTable('products')
};
