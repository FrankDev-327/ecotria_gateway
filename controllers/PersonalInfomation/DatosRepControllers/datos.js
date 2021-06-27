'use strict';

const { PERSONAL_API } = require('../../../config/setup')
const _axios = require('../../../setup_axios/conf_axios');
const datosRequest = _axios(PERSONAL_API);

async function createDatosResponsable(req, res) {
    try {
        const body = req.body;
        const request = await datosRequest.post(req.path, body);
        const info = request.data;
        return res.status(200).json(info);
    } catch (error) {
        return res.status(200).json({ error: error.message });
    }
}

async function viewMyDatosResponsable(req, res) {
    try {
        const request = await datosRequest.get(req.path);
        const info = request.data;
        return res.status(200).json(info);
    } catch (error) {
        console.log(error);
        return res.status(200).json({ error: error.message })
    }
}

async function listsDatosResponsable(req, res) {
    try {
        const request = await datosRequest.get(req.path);
        const info = request.data;
        return res.status(200).json(info);
    } catch (error) {
        console.log(error);
        return res.status(200).json({ error: error.message })
    }
}

async function updateDatosResponsable(req, res) {
    try {
        const body = req.body;
        const request = await datosRequest.put(req.path, body);
        const info = request.data;
        return res.status(200).json(info);
    } catch (error) {
        console.log(error);
        return res.status(200).json({ error: error.message })
    }
}

module.exports = {
    createDatosResponsable,
    viewMyDatosResponsable,
    listsDatosResponsable,
    updateDatosResponsable,

}