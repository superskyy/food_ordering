exports.up = function(knex, Promise) {
  return knex.schema
  .createTable('customer', function (table) {
    table.increments();
    table.string('name');
    table.string('phone_number');
  })
  .createTable('cart', function (table) {
    table.increments();
    table.integer('customer_id').references('customer(id)');
  })
  .createTable('menu', function (table) {
    table.increments();
    table.string('name');
  })
  .createTable('cart_items', function (table) {
    table.increments();
    table.string('cart_items');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('cart_items','menu','cart','customer','users');
};

/*
CREATE TABLE customer (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(50) NOT NULL,
  phone_number VARCHAR(15)
);

CREATE TABLE cart (
  id SERIAL PRIMARY KEY NOT NULL,
  customer_id INTEGER REFERENCES customer(id) ON DELETE CASCADE
);

CREATE TABLE menu (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(50) NOT NULL,
  price MONEY
);

CREATE TABLE cart_items (
  id SERIAL PRIMARY KEY NOT NULL,
  cart_id INTEGER REFERENCES cart(id) ON DELETE CASCADE,
  menu_id INTEGER REFERENCES menu(id) ON DELETE CASCADE,
  price MONEY
);
*/