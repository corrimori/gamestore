
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('products').del()
    .then(function () {
      // Inserts seed entries
      return knex('products').insert([
        {id: 1, title: 'Mario Bobblehead'},
        {id: 2, title: 'Blizzard Retro Scarf'},
        {id: 3, title: 'Sonic Toothbrush'}
      ]);
    });
};
