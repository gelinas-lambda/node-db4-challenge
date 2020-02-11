
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe_ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_ingredients').insert([
        {id: 1, recipe_id: 1, ingredient_id: 1, quantity: 1, units: 'pound'},
        {id: 2, recipe_id: 1, ingredient_id: 12, quantity: 2, units: 'cups'},
        {id: 3, recipe_id: 1, ingredient_id: 11, quantity: 2, units: 'teaspoon'},
        {id: 4, recipe_id: 2, ingredient_id: 2, quantity: 1, units: 'pound'},
        {id: 5, recipe_id: 2, ingredient_id: 11, quantity: 1, units: 'teaspoon'},
        {id: 6, recipe_id: 2, ingredient_id: 3, quantity: 2, units: 'cups'},
        {id: 7, recipe_id: 3, ingredient_id: 2, quantity: 1, units: 'pound'},
        {id: 8, recipe_id: 3, ingredient_id: 4, quantity: 1, units: 'cup'},
        {id: 9, recipe_id: 3, ingredient_id: 11, quantity: 1, units: 'teaspoon'},
        {id: 10, recipe_id: 4, ingredient_id: 2, quantity: 1, units: 'pound'},
        {id: 11, recipe_id: 4, ingredient_id: 4, quantity: 1, units: 'cup'},
        {id: 12, recipe_id: 4, ingredient_id: 11, quantity: 1, units: 'teaspoon'},
        {id: 13, recipe_id: 5, ingredient_id: 6, quantity: 0.5, units: 'pound'},
        {id: 14, recipe_id: 5, ingredient_id: 7, quantity: 3, units: 'cups'},
        {id: 15, recipe_id: 5, ingredient_id: 11, quantity: 0.75, units: 'teaspoon'},
        {id: 16, recipe_id: 6, ingredient_id: 8, quantity: 2, units: 'packages'},
        {id: 17, recipe_id: 6, ingredient_id: 9, quantity: 1, units: 'cup'},
        {id: 18, recipe_id: 6, ingredient_id: 10, quantity: 0.25, units: 'cups'},
      ]);
    });
};
