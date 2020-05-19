const connection = require('../../database/connection')


module.exports = {

    async createTwo(request, response){

        const { q } = request.body;

        for(var criptoTwo_id=1; criptoTwo_id <= q; criptoTwo_id++){

            

            let prim = 1;

            for(var i = 1; i <=20; i++){

                if(prim == 1){

                    rnd = Math.floor(Math.random() * (7 - 3 + 1) + 3);

                    var body = [rnd]

                    prim = 0;

                }else{

                    rnd = Math.floor(Math.random() * (7 - 3 + 1) + 3);

                    body.push(rnd);

                }

                var criptoTwo_value = body.join(',');

            }
        
            await connection('criptoTwo').insert({

                criptoTwo_id,
                criptoTwo_value

            });
        

        }

        return response.status(204).send();

    },

    async indexTwo(request, response){

        const cripto = await connection('criptoTwo').select('*');

        return response.json(cripto);

    },

    async delete(request, response){

        await connection('criptoTwo').delete();

        return response.status(204).send();

    },

};