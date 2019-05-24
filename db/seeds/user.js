exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(function () {
      return Promise.all([
        knex('users').insert({id: 1, name: 'Alice'}),
        knex('users').insert({id: 2, name: 'Bob'}),
        knex('users').insert({id: 3, name: 'Charlie'})
      ]);
    });
};

/*
exports.seed = function(knex, Promise) {
  return knex('menu').del().then(function () {
    return Promise.all([
      knex('menu').insert({name: 'Italian Pizza', description: 'Italian Sausage with mushroom, arugula and balsamic reduction', price: '$16'}),
      knex('menu').insert({name: 'Savoury Gnocchi', description: 'House mad gnocchi with brie, pancetta in a cream sauce', price: '$13'}),
      knex('menu').insert({name: 'Linguine Vongole', description: 'Pasta with fresh clams, white wine tomato sauce, garlic and fresh parsley', price: '$15'}),
      knex('menu').insert({name: 'Tenderloin Sandwich', description: 'Beef Tenderloin on a baguette with blue cheese, gravy and a side of pan fried potatoes', price: '$14'})
    ]);
  });
};
*/
