const connection = require('../../database/connection')
const encrypt = require('../../util/users/utils')


module.exports = {

    async createAdmin(request, response){

        const { admin_name, admin_login, admin_password, admin_email }  = request.body;
        const admin_confirmation = 0;
        const { admin_name_cripto, admin_login_cripto, admin_password_cripto, admin_email_cripto, admin_keyOne, admin_keyTwo } = await encrypt.encode(
            admin_name, 
            admin_login, 
            admin_password, 
            admin_email     
        );

        const admin_id = await connection('admin').returning('admin_id').insert({

            admin_name: admin_name_cripto,
            admin_login: admin_login_cripto,
            admin_password: admin_password_cripto,
            admin_email: admin_email_cripto,
            admin_confirmation,
            admin_keyOne,
            admin_keyTwo
        });


        await encrypt.confirmationEmail(admin_name, admin_id, admin_email);
        
        

        return response.status(204).send();

    },

    async indexAdmin(request, response){

        const data = await connection('admin').select('*');

        return response.json(data);

    },

    async showAdmin(request, response){

        const { admin_id }  = request.body;
        const {id, admin_name, admin_login, admin_password, admin_email, admin_confirmation, admin_keyOne, admin_keyTwo} = await connection('admin').where('admin_id', admin_id).select('*').first();
        const dataTemp = [id, admin_name, admin_login, admin_password, admin_email, admin_keyOne, admin_keyTwo, admin_confirmation];
        const data = await encrypt.decode(dataTemp);

        //console.log(data);
        

        return response.json(data);
    },

    async delete(request, response){

        const { admin_id } = request.body;

        const admin = await connection('admin').where('admin_id', admin_id).delete();

        return response.status(204).send();

    },

    async deleteall(request, response){

        await connection('admin').select('*').delete();

        return response.status(204).send();

    },

};