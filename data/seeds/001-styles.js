
exports.seed = function(knex) {
  // .truncate() instead of .del() to reset primary keys
  return knex('styles').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('styles').insert([
        {id: 1, name: 'Chinese'},
        {id: 2, name: 'Soul Food'},
        {id: 3, name: 'Italian'}
      ]);
    });
};
