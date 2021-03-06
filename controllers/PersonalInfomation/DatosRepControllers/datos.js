'use strict';

const { PERSONAL_API } = require('../../../config/setup')
const _axios = require('../../../setup_axios/conf_axios');
const datosRequest = _axios(PERSONAL_API);

async function createDatosResponsable(req, res) {
    try {
        var body = req.body;
        var request = await datosRequest.post(req.path, body);
        var info = request.data;
        return res.status(200).json(info);
    } catch (error) {
        return res.status(200).json({error: error.message})
    }
}

async function viewMyDatosResponsable(req, res) {
    try {
        var request = await datosRequest.get(req.path);
        var info = request.data;
        return res.status(200).json(info);
    } catch (error) {
        console.log(error);
        return res.status(200).json({error: error.message})
    }
}

async function listsDatosResponsable(req, res) {
    try {
        var request = await datosRequest.get(req.path);
        var info = request.data;
        return res.status(200).json(info);
    } catch (error) {
        console.log(error);
        return res.status(200).json({error: error.message})
    }
}

async function updateDatosResponsable(req, res) {
    try {
        var body = req.body;
        var request = await datosRequest.put(req.path, body);
        var info = request.data;
        return res.status(200).json(info);
    } catch (error) {
        console.log(error);
        return res.status(200).json({error: error.message})
    }
}

module.exports = {
    createDatosResponsable,
    viewMyDatosResponsable,
    listsDatosResponsable,
    updateDatosResponsable,

}