
exports.up = function(knex) {
    return knex.schema.createTable('admin', function(table){

        table.increments('admin_id');
        table.string('admin_name');
        table.string('admin_login');
        table.string('admin_password');
        table.string('admin_email');
        table.int('admin_confirmation');
        table.int('admin_keyOne');
        table.int('admin_keyTwo');
        table.foreign('admin_keyOne').references('criptoOne_id').inTable('criptoOne');
        table.foreign('admin_keyTwo').references('criptoTwo_id').inTable('criptoTwo');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('admin');
};
