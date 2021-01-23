'use strict';

const express = require('express');
const server  = express();
const setup = require('./config/setup');
const bodyParse = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');

const { 
   route_user,
   route_datos,
   route_post,
   route_empresa,
   route_suscriber,
} = require('./routes/index');

server.use(cors());
server.use(bodyParse.urlencoded({
   extended: false
}));

server.disable('x-powered-by');
server.use(bodyParse.json());
server.use(morgan('dev'));

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization,X-API-KEY,Origin,X-Rquested-Widht,' 
    + 'Content-Type,Accept,Acces-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

server.use(setup.MAIN_PATH_ECOTRIA_API, route_post);
server.use(setup.MAIN_PATH_ECOTRIA_API, route_user);
server.use(setup.MAIN_PATH_ECOTRIA_API, route_datos);
server.use(setup.MAIN_PATH_ECOTRIA_API, route_empresa);
server.use(setup.MAIN_PATH_ECOTRIA_API, route_suscriber);

server.listen(setup.PORT, function(){
   console.log('Ecotria Gateway listeing on port: '+ setup.PORT);
});