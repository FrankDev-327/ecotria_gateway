'use strict';

const express = require('express');
const { decode } = require('../../../middlewares/index')
const { AdminController } = require('../../../controllers/index');
const route = express.Router();

route.post('/admin-create/', AdminController.createNewAdmin);
route.post('/admin-login/', AdminController.loginAdmin);
route.put('/admin-img-update/', AdminController.updateImageAdminUser);

module.exports = route