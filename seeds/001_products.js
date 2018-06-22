
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('products').del()
    .then(function () {
      // Inserts seed entries
      return knex('products').insert([
        {id: 1, title: 'Mario Bobblehead'},
        {id: 2, title: 'Blizzard Retro Scarf'},
        {id: 3, title: 'Sonic Toothbrush'}
      ])
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('products_id_seq', (SELECT MAX(id) FROM products));"
      )
    })
};
