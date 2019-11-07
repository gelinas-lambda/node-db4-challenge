
// consider storing table or column names as variables, possibly in external files
// similar to storing action names as variables for redux reducers
// will prevent typos in the up/down
// const styles = 'styles;

exports.up = function(knex) {
    // db schema design located https://app.dbdesigner.net/designer/schema/282702

    return knex.schema
        .createTable('styles', tbl => {
            // .increments() creates a primary key, integer without negative values (unsigned)
            tbl.increments(); // primary key automatically named 'id'
            
            tbl
                .string('name', 255)
                .notNullable();
        })
        .createTable('recipes', tbl => {
            tbl.increments();

            tbl
                .string('name', 255)
                .notNullable();

            // define a Foreign Key
            tbl // foreign key to style table
                .integer('style_id')
                .unsigned() // integer without negative values, db uses sign bit for larger #s
                .references('id')
                .inTable('species')
                .onDelete('RESTRICT') // regards deleting recrod from the primary key table
                // onDelete() can take 'RESTRICT', 'NO ACTION', 'SET NULL'
                .onUpdate('CASCADE'); // regards chaging the value of the primary key table
        })
        .createTable('ingredients', tbl => {
            tbl.increments();

            tbl
                .string('name', 255)
                .notNullable();
        })
        .createTable('recipe_ingredients', tbl => {
            tbl.increments();

            tbl // foreign key to recipe table
                .integer('recipe_id')
                .unsigned()
                .references('id')
                .inTable('recipes')
                .onDelete('RESTRICT')
                .onUpdate('CASCADE');
            tbl // foreign key to ingredients table
                .integer('ingredient_id')
                .unsigned()
                .references('id')
                .inTable('ingredients')
                .onDelete('RESTRICT')
                .onUpdate('CASCADE');
            tbl
                .decimal('quantity', 16, 8)
                .notNullable();
            tbl
                .string('units', 16)
                .notNullable();
        })
};

exports.down = function(knex) {
    // drop tables in reverse order when using foreign keys
    return knex.schema
        .dropTableIfExists('recipe_ingredients')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('recipes')
        .dropTableIfExists('styles');
};
