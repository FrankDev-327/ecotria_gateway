'use strict';

const express = require('express');
const app = express();
const setup = require('./config/setup');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');

const {
   route_user,
   route_datos,
   route_post,
   route_admin,
   route_empresa,
   route_suscriber,
} = require('./routes/index');

app.use(cors());
app.use(morgan('dev'));
app.disable('x-powered-by');
app.use(bodyParser.urlencoded({
   extended: false,
   parameterLimit: 100000,
   limit: '50MB'
}));
app.use(bodyParser.json({
   limit: '50MB'
}));

app.use((req, res, next) => {
   res.header('Access-Control-Allow-Origin', '*');
   res.header('Access-Control-Allow-Headers', 'Authorization,X-API-KEY,Origin,X-Rquested-Widht,'
      + 'Content-Type,Accept,Acces-Control-Allow-Request-Method');
   res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
   res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
   next();
});

app.use(setup.MAIN_PATH_ECOTRIA_API, route_admin);
app.use(setup.MAIN_PATH_ECOTRIA_API, route_post);
app.use(setup.MAIN_PATH_ECOTRIA_API, route_user);
app.use(setup.MAIN_PATH_ECOTRIA_API, route_datos);
app.use(setup.MAIN_PATH_ECOTRIA_API, route_empresa);
app.use(setup.MAIN_PATH_ECOTRIA_API, route_suscriber);

app.listen(setup.PORT, function () {
   console.log('Ecotria Gateway listeing on port: ' + setup.PORT);
});