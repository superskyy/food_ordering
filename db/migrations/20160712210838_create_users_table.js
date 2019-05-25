exports.up = function(knex, Promise) {
  return knex.schema
  .createTable('customer', function (table) {
    table.increments();
    table.string('name');
    table.string('phone_number');
  })
  .createTable('cart', function (table) {
    table.increments();
    table.integer('customer_id');
    table.foreign('customer_id').references('customer.id');
  })
  .createTable('menu', function (table) {
    table.increments();
    table.string('name');
    table.string('picture');
    table.string('description');
    table.integer('price');
  })
  .createTable('cart_items', function (table) {
    table.increments();
    table.integer('cart_id');
    table.foreign('cart_id').references('cart.id');
    table.integer('menu_id');
    table.foreign('menu_id').references('menu.id');
    table.integer('quantity');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('cart_items','menu','cart','customer');
};


