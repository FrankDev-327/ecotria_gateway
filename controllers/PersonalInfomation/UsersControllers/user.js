'use strict';

//gateway

const { PERSONAL_API } = require('../../../config/setup')
const { encodeMethodToUser } = require('../../../middlewares/encode');
const _axios = require('../../../setup_axios/conf_axios');
const personalRequest = _axios(PERSONAL_API);
const Cloudinary = require('../../../middlewares/upload_images')

async function CreateUsers(req, res) {
    try {
        const body = req.body;
        const request = await personalRequest.post(req.path, body);
        const info = request.data;
        return res.status(200).json(info);
    } catch (error) {
        return res.status(200).json({ error: error.message })
    }
}

async function UpdateUsers(req, res) {
    try {
        const body = req.body;
        const request = await personalRequest.put(req.path, body);
        const info = request.data;
        return res.status(200).json(info);
    } catch (error) {
        return res.status(200).json({ error: error.message })
    }
}

async function ViewUser(req, res) {
    try {
        const request = await personalRequest.get(req.path);
        const info = request.data;
        return res.status(200).json(info);
    } catch (error) {
        return res.status(200).json({ error: error.message })
    }
}

async function LoginUsers(req, res) {
    try {
        const body = req.body;
        const request = await personalRequest.post(req.path, body);
        const info = request.data;
        const token = await encodeMethodToUser(info);
        return res.status(200).json({
            info: info, token: token
        });
    } catch (error) {
        return res.status(200).json({ error: error.message })
    }
}

async function uploadPerfil(req, res) {
    try {
        var params = req.body;
        Cloudinary.uploader.upload(params.img,
            async function (err, result) {
                if (err) {
                    return res.status(200).json({
                        code: 'API_P_403',
                        message: 'It was not possible to store the image. Try again.'
                    });
                }

                params.img = result.secure_url;
                const request = await personalRequest.put(req.path, params);
                const info = request.data;

                const info = request.data;
                return res.status(200).json(info);
            });

    } catch (error) {
        return res.status(200).json({ error: error.message })
    }
}

module.exports = {
    uploadPerfil,
    CreateUsers,
    UpdateUsers,
    ViewUser,
    LoginUsers

}