'use strict';

const _axios = require('../../setup_axios/conf_axios');
const empresaRequest = _axios('***URL API***');

async function createMyEnterprise(req, res) {
    try {
        var body = req.body;
        var request = await empresaRequest.post(req.path, body);
        var info = request.data;
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
        var body = req.body;
        var request = await datosRequest.put(req.path, body);
        var info = request.data;
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
        var request = await datosRequest.get(req.path);
        var info = request.data;
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
        var request = await datosRequest.get(req.path);
        var info = request.data;
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