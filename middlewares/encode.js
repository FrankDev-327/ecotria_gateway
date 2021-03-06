'use strict';

const JWT = require('jwt-simple');
const { KEY } = require('../config/setup');
const moment = require('moment');

module.exports = {
    encodeMethodToUser: async objectUser => {
        let payload = {
            _id: objectUser._id,
            nombre: objectUser.nombre,
            role_user: objectUser.role_user,
            apellido: objectUser.apellido,
            correo: objectUser.correo,
            iap: moment.unix(),
            exp: moment().add(1, 'day').unix
        }
        return JWT.encode(payload, KEY);
    }
}