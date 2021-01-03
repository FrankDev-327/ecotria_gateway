'use strict';

const express = require('express');
const { decode } = require('../../middlewares/index')
const { DatosController } = require('../../controllers/index');
const route = express.Router();

route.post('/datosrespo-create', /*  decode.autenticacion, */ DatosController.createDatosResponsable);
route.get('/datosrespo-view/',/*  decode.autenticacion, */ DatosController.viewMyDatosResponsable);
route.get('/datosrespo-lists/',/*  decode.autenticacion, */ DatosController.listsDatosResponsable);
route.put('/datosrespo-update/:_id',/*  decode.autenticacion, */ DatosController.updateDatosResponsable);

module.exports = route
