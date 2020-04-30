
exports.seed = async function(knex) {
  await knex('steps').insert([
    { instructions: 'pour cereal into bowl', recipe_id: 1, step_number: 1 },
    { instructions: 'pour milk into bowl', recipe_id: 1, step_number: 2 }
  ])
};
