const express = require('express');
const criptoOne = require('./controllers/criptog/criptoOneController')
const criptoTwo = require('./controllers/criptog/criptoTwoController')
const admin = require('./controllers/users/adminController')
const confirmation = require('./controllers/users/confirmationController')
const routes = express.Router();

routes.post('/criptoOne', criptoOne.createOne);
routes.get('/criptoOne', criptoOne.indexOne);
routes.delete('/criptoOne', criptoOne.delete);
routes.post('/criptoTwo', criptoTwo.createTwo);
routes.get('/criptoTwo', criptoTwo.indexTwo);
routes.delete('/criptoTwo', criptoTwo.delete);


routes.post('/admin', admin.createAdmin);
routes.get('/admin', admin.showAdmin);
routes.get('/adminlist', admin.indexAdmin);
routes.delete('/admin', admin.delete);
routes.delete('/adminall', admin.deleteall);

routes.get('/confirmation', confirmation.confirm);


module.exports = routes;