exports.up = async function(knex) {
    await knex.schema.createTable('recipes', (table) => {
        table.increments('id')
        table.text('name').notNull().unique()
    })

    await knex.schema.createTable('amount', (table) => {
        table.increments('id')
        table.text('quantity').notNull()
    })

    await knex.schema.createTable('ingredients', (table) => {
        table.increments('id')
        table.text('name').notNull()
        table.integer('amount_id')
            .references('id')
            .inTable('amount')
            .onDelete('SET NULL')
            .onUpdate('CASCADE')
    })

    await knex.schema.createTable('steps', (table) => {
        table.increments('id')
        table.text('instructions').notNull()
        table.integer('recipe_id')
            .references('id')
            .inTable('recipes')
            .onDelete('SET NULL')
            .onUpdate('CASCADE')
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
    })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIsExists('recipes')
    await knex.schema.dropTableIsExists('amount')
    await knex.schema.dropTableIsExists('ingredients')
    await knex.schema.dropTableIsExists('steps')
    await knex.schema.dropTableIsExists('recipes_ingredients')
};
