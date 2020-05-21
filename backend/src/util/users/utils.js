const connection = require('../../database/connection')
const nodemailer = require('nodemailer');

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
            //console.log(parseInt(strAux, 10));
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
    admin_confirmation = data[7];
    
    

    return ({
        admin_id: id,
        admin_name: admin_name,
        admin_login: admin_login,
        admin_password: admin_password,
        admin_email: admin_email,
        admin_keyOne: admin_keyOne,
        admin_keyTwo: admin_keyTwo,
        admin_confirmation: admin_confirmation

    });
},

async confirmationEmail(name, id, email){
    const link = 'http://localhost:3333/confirmation?id=' + id;

    const output = `
        <p>${name}, obrigado(a) por se cadastrar em WebProjectOrganizer.</p>
        <p>Para finalizar seu cadastro voce precisa confirmar o seu email</p>
        <p>Clique no link para confirmar: <a href="${link}">${link}</a> </p>
    `;

    let testAccount = await nodemailer.createTestAccount();

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: testAccount.user, // generated ethereal user
            pass: testAccount.pass, // generated ethereal password
        },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: '"WebProjectOrganizer" <test@matheusalvarenga.com>', // sender address
        to: email, // list of receivers
        subject: "WebProjectOrganizer Confirmation email", // Subject line
        text: output, // plain text body
        html: output, // html body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...


}

}