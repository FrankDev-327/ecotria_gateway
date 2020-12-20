'use strict';

const JWT = require('jwt-simple');
const setup = require('../config_ecotria/eco_conf');
const moment = require('moment');

exports.encodeMethod = async objectUser => {
    let payload = {
        _id :objectUser._id,
        nombre: objectUser.nombre,
        apellido :objectUser.apellido,
        correo: objectUser.correo,
        iap: moment.unix(),
        exp:moment().add(30, "min").unix()
    }
    return JWT.encode(payload, setup.secret_phase);
}