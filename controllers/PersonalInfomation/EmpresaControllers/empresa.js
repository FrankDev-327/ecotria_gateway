'use strict';

const { PERSONAL_API } = require('../../../config/setup')
const _axios = require('../../../setup_axios/conf_axios');
const empresaRequest = _axios(PERSONAL_API);

async function createMyEnterprise(req, res) {
    try {
        const body = req.body;
        const request = await empresaRequest.post(req.path, body);
        const info = request.data;
        return res.status(200).json(info);
    } catch (error) {
        console.log(error);
        return res.status(200).json({
            error: error.message,
        });
    }
}

async function updateMyEnterprise(req, res) {
    try {
        const body = req.body;
        const request = await datosRequest.put(req.path, body);
        const info = request.data;
        return res.status(200).json(info);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            error: error.message
        });
    }
}

async function viewMyEnterprise(req, res) {
    try {
        const request = await datosRequest.get(req.path);
        const info = request.data;
        return res.status(200).json(info);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            error: error.message
        });
    }
}

//queda en veremos.
async function listsMyEnterprise(req, res) {
    try {
        const request = await datosRequest.get(req.path);
        const info = request.data;
        return res.status(200).json(info);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            error: error.message,
        });
    }
}

module.exports = {
    createMyEnterprise,
    updateMyEnterprise,
    viewMyEnterprise,
    listsMyEnterprise,

}