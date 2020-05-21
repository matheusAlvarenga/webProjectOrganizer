const connection = require('../../database/connection')
const util = require('../../util/users/utils')

module.exports = {
    async confirm(request, response){
        const {id} = request.query;


        await connection('admin').where('admin_id', id).update({admin_confirmation: 1});

        const data = await connection('admin').where('admin_id', id).select('*').first();


        return response.json(data);
    }
}