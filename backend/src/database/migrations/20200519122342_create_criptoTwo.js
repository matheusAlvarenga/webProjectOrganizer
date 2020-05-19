
exports.up = function(knex) {
  
    return knex.schema.createTable('criptoTwo', function(table){

        table.int('criptoTwo_id').primary();
        table.string('criptoTwo_value');

    });
    
};

exports.down = function(knex) {
  
    return knex.schema.dropTable('criptoTwo');

};
