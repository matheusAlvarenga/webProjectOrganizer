
exports.up = function(knex) {
  
    return knex.schema.createTable('criptoOne', function(table){

        table.int('criptoOne_id').primary();
        table.string('criptoOne_value');

    });
    
};

exports.down = function(knex) {
  
    return knex.schema.dropTable('criptoOne');

};
