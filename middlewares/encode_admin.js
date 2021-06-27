'use strict';

const JWT = require('jwt-simple');
const { KEY } = require('../config/setup');
const moment = require('moment');

module.exports = {
    encodeMethodToAdmin : async objectAdmin => {
        let payload = {
            _id :objectAdmin._id,
            name: objectAdmin.name,
            roleType: objectAdmin.roleType,
            lastName :objectAdmin.lastName,
            email: objectAdmin.email,
            iap: moment.unix(),
            exp:moment().add(1, 'day').unix
        }
        return JWT.encode(payload, KEY);
    }
}