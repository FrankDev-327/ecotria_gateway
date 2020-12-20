'use strict';

const express = require('express');
const { EmpresaController } = require('../../controllers/index');
const { decode } = require('../../middlewares/index')
const api = express.Router();

api.post('/empresa_create/', decode.autenticacion, EmpresaController.createMyEnterprise);
api.put('/empresa_update/:_id', decode.autenticacion, EmpresaController.updateMyEnterprise);
api.get('/empresa_view/', decode.autenticacion, EmpresaController.viewMyEnterprise);

//en veremos por si ocurre algún cambio drastico
api.get('/empresa_lists/', decode.autenticacion, EmpresaController.listsMyEnterprise); 

module.exports = api
