exports.up = async function(knex) {
    await knex.schema.createTable('recipes', (table) => {
        table.increments('id')
        table.text('name').notNull().unique()
    })

    await knex.schema.createTable('ingredients', (table) => {
        table.increments('id')
        table.text('name').notNull().unique()
        table.text('amount').notNull()
    })

    await knex.schema.createTable('steps', (table) => {
        table.increments('id')
        table.text('instructions').notNull().unique()
        table.integer('recipe_id')
            .references('id')
            .inTable('recipes')
            .onDelete('SET NULL')
            .onUpdate('CASCADE')
        table.integer('step_number').notNull()
    })

    await knex.schema.createTable('recipes_ingredients', (table) => {
        table.integer('recipe_id')
            .references('id')
            .inTable('recipes')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
        table.integer('ingredient_id')
            .references('id')
            .inTable('ingredients')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
        table.primary(['recipe_id', 'ingredient_id'])
    })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists('recipes_ingredients')
    await knex.schema.dropTableIfExists('steps')
    await knex.schema.dropTableIfExists('ingredients')
    await knex.schema.dropTableIfExists('recipes')
};
