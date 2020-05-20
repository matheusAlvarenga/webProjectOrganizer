const connection = require('../../database/connection')

module.exports = {

async encode(admin_name, admin_login, admin_password, admin_email){

    var data = [admin_name, admin_login, admin_password, admin_email];
    // GETTING THE KEYONE VALUE
    const keyOne = Math.floor(Math.random() * (200 - 1) + 1);
    const value_keyOne = await connection('criptoOne').where('criptoOne_id', keyOne).select('criptoOne_value').first();
    
    // GETTING THE KEYTWO VALUE 
    const keyTwo = Math.floor(Math.random() * (200 - 1) + 1);
    const value_keyTwo = await connection('criptoTwo').where('criptoTwo_id', keyTwo).select('criptoTwo_value').first();

    // CONVERT KEYTWO VALUE TO ARRAY
    const array_keyTwo = value_keyTwo['criptoTwo_value'].split(',');
    const array_keyTwo_leng = array_keyTwo.length;

    for(var j = 0; j < data.length; j++){
         // FOR EACH LETTER OF STRING
    
        var count = -1;

        var encoded = '';

        for(var i = 0; i < data[j].length; i++){
            
            // CONVERT INTO NUMBER
            let n = data[j].charCodeAt(i);

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

            encoded = encoded + str;

        }
        data[j] = encoded;

    }

    admin_name = data[0];
    admin_login = data[1];
    admin_password = data[2];
    admin_email = data[3];
    console.log(value_keyOne['criptoOne_id']);
    

    return ({
        admin_name_cripto: admin_name,
        admin_login_cripto: admin_login,
        admin_password_cripto: admin_password,
        admin_email_cripto: admin_email,
        admin_keyOne: keyOne,
        admin_keyTwo: keyTwo,

    });
},




async decode(data){

    var data2 = [data[1], data[2], data[3], data[4]];
    // GETTING THE KEYONE VALUE
    const keyOne = data[5];
    const value_keyOne = await connection('criptoOne').where('criptoOne_id', keyOne).select('criptoOne_value').first();
    
    // GETTING THE KEYTWO VALUE 
    const keyTwo = data[6];
    const value_keyTwo = await connection('criptoTwo').where('criptoTwo_id', keyTwo).select('criptoTwo_value').first();

    // CONVERT KEYTWO VALUE TO ARRAY
    const array_keyTwo = value_keyTwo['criptoTwo_value'].split(',');
    const array_keyTwo_leng = array_keyTwo.length;

    for(var j = 0; j < data2.length; j++){
         // FOR EACH LETTER OF STRING
        var place = 0;
        //console.log(data2[j].length);

        var count = -1;

        var decoded = '';

        for(var i = 0; i < 21; i++){

            var aux = 0;
            var strAux = '';
            var arrayItem = parseInt(array_keyTwo[i], 10);

            for(var k = place; k < (arrayItem + place); k++){
                /*console.log(i);
                console.log(j);
                console.log(k);*/
                //console.log(arrayItem + place);
                if(data2[j][k] != 0){
                    aux = 1   
                }
                

                if(aux == 1){
                    strAux += data2[j][k];
                    
                }
            }
            if(place >= data2[j].length){
                break;
            }
            place += parseInt(array_keyTwo[i], 10);
            console.log(parseInt(strAux, 10));
            decoded = decoded + String.fromCharCode(parseInt(strAux, 10) - value_keyOne['criptoOne_value']);
            
            

        }
        data2[j] = decoded;

    }

    id = data[0];
    admin_name = data2[0];
    admin_login = data2[1];
    admin_password = data2[2];
    admin_email = data2[3];
    admin_keyOne = data[5];
    admin_keyTwo = data[6];
    
    

    return ({
        admin_id: id,
        admin_name: admin_name,
        admin_login: admin_login,
        admin_password: admin_password,
        admin_email: admin_email,
        admin_keyOne: admin_keyOne,
        admin_keyTwo: admin_keyTwo,

    });
}

}