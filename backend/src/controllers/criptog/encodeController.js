const connection = require('../../database/connection')

module.exports = {

    async encode(request, response){

        const { string } = request.body;

        // GETTING THE KEYONE VALUE
        const keyOne = Math.floor(Math.random() * (10 - 1) + 1);
        const value_keyOne = await connection('criptoOne').where('criptoOne_id', keyOne).select('criptoOne_value').first();
        const keyOne_leng = string.length;
        
        // GETTING THE KEYTWO VALUE 
        const keyTwo = Math.floor(Math.random() * (10 - 1) + 1);
        const value_keyTwo = await connection('criptoTwo').where('criptoTwo_id', keyTwo).select('criptoTwo_value').first();

        // CONVERT KEYTWO VALUE TO ARRAY
        const array_keyTwo = value_keyTwo['criptoTwo_value'].split(',');
        const array_keyTwo_leng = array_keyTwo.length;

        // FOR EACH LETTER OF STRING

        var count = -1;

        var encoded = '';

        for(var i = 0; i<keyOne_leng; i++){

            // CONVERT INTO NUMBER
            let n = string.charCodeAt(i);

            // SUM THE KEYONE INTO EACH NUMBER
            let x = parseInt(value_keyOne['criptoOne_value'], 10);

            let n_sum_x = n+x;

            // SET THE NUMBER OF CHARACTER PER LETTER

            if(count == 21){

                count = 1;

            }else{

                count++;

            }

            let tam = array_keyTwo[count];

            let str = n_sum_x.toString().padStart(tam, "0");

            encoded=encoded+str;

        }


        return response.json({

            keyOne: value_keyOne['criptoOne_value'],
            keyTwo: value_keyTwo['criptoTwo_value'],
            string: encoded

        });

    }

};