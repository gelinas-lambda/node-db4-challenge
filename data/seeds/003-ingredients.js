
exports.seed = function(knex) {
  // .truncate() instead of .del() to reset primary keys
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1, name: 'beef'},
        {id: 2, name: 'chicken'},
        {id: 3, name: 'rice'},
        {id: 4, name: 'corn meal'},
        {id: 5, name: 'waffles'},
        {id: 6, name: 'pizza dough'},
        {id: 7, name: 'tomato'},
        {id: 8, name: 'ladyfingers'},
        {id: 9, name: 'marzipan'},
        {id: 10, name: 'sugar'},
        {id: 11, name: 'salt'},
        {id: 12, name: 'broccoli'}
      ]);
    });
};
