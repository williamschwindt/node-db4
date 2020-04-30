
exports.seed = async function(knex) {
  await knex('recipes').insert([
    { name: 'bowl of cereal' }
  ])
};
