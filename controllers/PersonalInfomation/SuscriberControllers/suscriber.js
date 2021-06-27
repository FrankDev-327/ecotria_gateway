'use strict';

//gateway
const { PERSONAL_API } = require('../../../config/setup')
const { encodeMethod } = require('../../../middlewares/index');
const _axios = require('../../../setup_axios/conf_axios');
const suscriberRequest = _axios(PERSONAL_API);

async function createSuscribers(req, res) {
    try {
        const body = req.body;
        const request = await suscriberRequest.post(req.path, body);
        const info = request.data;
        return res.status(200).json(info);
    } catch (error) {
        console.log(error)
        return res.status(200).json({
            error: error.message,
        });
    }
}

async function updateSuscribers(req, res) {
    try {
        const body = req.body;
        const request = await suscriberRequest.put(req.path, body);
        const info = request.data;
        return res.status(200).json(info);
    } catch (error) {
        console.log(error)
        return res.status(200).json({
            error: error.message,
        });
    }
}

async function loginSuscribers(req, res) {
    try {
        const body = req.body;
        const request = await personalRequest.post(req.path, body);
        const info = request.data;
        const token = await encodeMethod(info);
        return res.status(200).json({
            info:info, token:token
        });
    } catch (error) {
        console.log(error)
        return res.status(200).json({
            error: error.message,
        });
    }
}

async function uploadPerfil(req, res) {
    try {
    } catch (error) {
        console.log(error);
        return res.status(200).json({
            error: error.message,
        });
    }
}

async function showProfileSus(req, res) {
    try {
    } catch (error) {
        console.log(JSON.stringify(error));
        return res.status(200).json({
            error: error.message,
        });
    }
}

module.exports = {
    uploadPerfil,
    showProfileSus,
    loginSuscribers,
    updateSuscribers,
    createSuscribers
}
