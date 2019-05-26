exports.seed = function(knex, Promise) {
  return knex('menu').del().then(function () {
    return Promise.all([
      knex('menu').insert({name: 'Bacon & Fresh Tomato', description: 'Gourmet tomato sauce, chunks of fresh mozzarella cheese, loaclly sourced bacon and green house cherry tomatoes.', price: '13', picture: './images/bacon_tomato.png'}),
      knex('menu').insert({name: 'Ham & Pineapple', description: 'Tangy tomato sauce with strong oregano flavor. Topped with a mix of mozzarella and cheddar or provolone. Black olives, and red onion.', price: '14', picture: './images/ham_pineapple.png'}),
      knex('menu').insert({name: 'Our Super Specialty', description: 'Ground beef, sausage, pepperoni, onion, mushrooms, and green peppers, placed underneath the tomato sauce with a sprinkle of shredded fresh parmesan cheese.', price: '17', picture: './images/specialty.png'}),
      knex('menu').insert({name: 'Neapolitan', description: 'Topped with fresh mozzarella, tomatoes, basil leaves, oregano, and olive oil. A thin crust pizza that its typically eaten with a fork and knife.', price: '13', picture: './images/neapolitan.png'}),
      knex('menu').insert({name: 'Chicken Alfredo', description: 'Handmade pizza crust that is slathered in creamy alfredo sauce, topped with tender chicken pieces and spinach and fresh parmesan', price: '18', picture: './images/chicken_alfredo.png'}),
      knex('menu').insert({name: 'Italian Sausage and Mushroom', description: 'Spicy tomato sauce with italian sausage, portabello mushrooms, arugula and balsamic reduction', price: '16', picture: './images/pizza.png'}),
      knex('menu').insert({name: 'Savoury Gnocchi', description: 'House made gnocchi with brie, cripsy pancetta in a cream sauce made of white wine and creme fraiche', price: '13', picture:'./images/gnocchi.png'}),
      knex('menu').insert({name: 'Linguine Vongole', description: 'Ribbon noodles with fresh atlantic clams, white wine rose sauce, garlic and fresh parsley, topped with shaved Parmigiano Reggiano', price: '15', picture:'./images/linguine.png'}),
      knex('menu').insert({name: 'Tenderloin Sandwich', description: 'Beef Tenderloin from local farm on a baguette with blue cheese, gravy and a side of pan fried potatoes and homemade ketchup', price: '14', picture: './images/tenderloin.png'})
    ]);
  });
};
