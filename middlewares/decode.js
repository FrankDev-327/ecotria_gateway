'use strict';

const setup = require('../config_ecotria/eco_conf');
var jwt_simple = require('jwt-simple');
const moment = require('moment');

exports.autenticacion = function (req, res, next) {
    if (!req.headers.authorization) {
        return res.status(403).json({
            message: "La petición no tiene la cabecera de autenticación"
        });
    }
    try {
        var tokenSend = req.headers.authorization.replace(/['"]+/g, '');
        try {
            var dataRegrex = jwt_simple.decode(tokenSend, setup.secret_phase);
            if (dataRegrex.exp <= moment().unix()) {
                return res.status(403).json({
                    message: "El token ha expirado"
                });
            }
        } catch (excepcion) {
            return res.status(403).json({
                message: "El token a expirado."
            });
        }

    } catch (error) {
        console.log(error);
        return res.status(200).json({
            error:error.message
        })
    }
    req.suscriber = dataRegrex;
    next();
}