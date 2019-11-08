
exports.seed = function(knex) {
  // .truncate() instead of .del() to reset primary keys
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {id: 1, name: 'Beef and broccoli', style_id: 1},
        {id: 2, name: 'Chicken fried rice', style_id: 1},
        {id: 3, name: 'Chicken and waffles', style_id: 2},
        {id: 4, name: 'Fried Chicken', style_id: 2},
        {id: 5, name: 'Pizza Margarita', style_id: 3},
        {id: 6, name: 'Tiramisu', style_id: 3}
      ]);
    });
};
