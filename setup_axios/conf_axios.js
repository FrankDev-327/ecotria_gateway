'use strict';

const axios = require('axios');
module.exports = url => {
    return axios.create({
        baseURL: url,
        headers: {
            'Content-Type': 'application/json'
        }
    })
}