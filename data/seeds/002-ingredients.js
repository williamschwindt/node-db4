
exports.seed = async function(knex) {
  await knex('ingredients').insert([
    { name: 'cereal', amount: 'one bowl'},
    { name: 'milk', amount: 'one bowl' }
  ])
};
