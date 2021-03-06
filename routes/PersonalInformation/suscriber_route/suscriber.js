'use strict';

const express = require('express');
const route = express.Router();
const { decode } = require('../../../middlewares/index')
const { SuscriberController } = require('../../../controllers/index');

// - La ruta de suscriber-create no debe llevar token
route.post('/suscriber-create/', decode.autenticacion, SuscriberController.createSuscribers);
route.post('/suscriber-login/', SuscriberController.loginSuscribers);
route.put('/suscriber-update/:id', decode.autenticacion, SuscriberController.updateSuscribers);

//Todavia me falta agregarle cosas a este método. No lo uses aún.
/* route.put('/suscriber-update-img/:id', decode.autenticacion, SuscriberController.uploadPerfil);
route.get('/suscriber-view-profile', decode.autenticacion, SuscriberController.showProfileSus); */

module.exports = route;