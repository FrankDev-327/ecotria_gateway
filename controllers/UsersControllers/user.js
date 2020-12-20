'use strict';

//gateway

const { encode } = require('../../middlewares/index');
const _axios = require('../../setup_axios/conf_axios');
const personalRequest = _axios('***URL API***');

async function CreateUsers(req, res) {
    try {
        var body = req.body;
        var request = await personalRequest.post(req.path, body);
        var info = request.data;
        return res.status(200).json(info);
    } catch (error) {
        return res.status(200).json({error: error.message})
    }
}

async function UpdateUsers(req, res) {
    try {
        var body = req.body;
        var request = await personalRequest.put(req.path, body);
        var info = request.data;
        return res.status(200).json(info);
    } catch (error) {
        return res.status(200).json({error: error.message})
    }
}

async function ViewUser(req, res) {
    try {
        var request = await personalRequest.get(req.path);
        var info = request.data;
        return res.status(200).json(info);
    } catch (error) {
        return res.status(200).json({error: error.message})
    }
}

async function LoginUsers(req, res) {
    try {
        var body = req.body;
        var request = await personalRequest.post(req.path, body);
        var info = request.data;
        var token = await encode.encodeMethod(info);
        return res.status(200).json({
            info:info, token:token
        });
    } catch (error) {
        return res.status(200).json({error: error.message})
    }
}

module.exports = {
    CreateUsers,
    UpdateUsers,
    ViewUser,
    LoginUsers

}