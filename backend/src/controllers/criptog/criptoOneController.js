const connection = require('../../database/connection')


module.exports = {

    async createOne(request, response){

        const { q } = request.body;

        for(var criptoOne_id = 1; criptoOne_id <= q; criptoOne_id++){

            criptoOne_value = Math.floor(Math.random() * (750 - 1) ) + 1;

            await connection('criptoOne').insert({

                criptoOne_id,
                criptoOne_value

            });
        
        }

        return response.status(204).send();

    },

    async indexOne(request, response){

        const cripto = await connection('criptoOne').select('*');

        return response.json(cripto);

    },

    async delete(request, response){

        await connection('criptoOne').delete();

        return response.status(204).send();

    },

};