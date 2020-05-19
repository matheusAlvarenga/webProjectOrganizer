const express = require('express');
const encodeCon = require('./controllers/criptog/encodeController')
const decodeCon = require('./controllers/criptog/decodeController')
const criptoOne = require('./controllers/criptog/criptoOneController')
const criptoTwo = require('./controllers/criptog/criptoTwoController')
const routes = express.Router();

routes.post('/encode', encodeCon.encode);
routes.post('/decode', decodeCon.decode);
routes.post('/criptoOne', criptoOne.createOne);
routes.get('/criptoOne', criptoOne.indexOne);
routes.delete('/criptoOne', criptoOne.delete);
routes.post('/criptoTwo', criptoTwo.createTwo);
routes.get('/criptoTwo', criptoTwo.indexTwo);
routes.delete('/criptoTwo', criptoTwo.delete);

module.exports = routes;