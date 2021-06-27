'use strict';

const express = require('express');
const { decode } = require('../../../middlewares/index')
const routes = express.Router();
const {UserController} = require('../../../controllers/index')

routes.post('/user-create', UserController.CreateUsers);
routes.put('/user-update/:id', decode.autenticacion, UserController.UpdateUsers);
routes.post('/user-login/', UserController.LoginUsers);
routes.get('/user-view/:id', decode.autenticacion, UserController.ViewUser);
routes.put('/user-img-profile/:id', decode.autenticacion, UserController.uploadPerfil);

module.exports = routes
