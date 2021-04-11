'use strict';

const { PERSONAL_API } = require('../../../config/setup')
const { encode_admin } = require('../../../middlewares/index')
const _axios = require('../../../setup_axios/conf_axios');
const Cloudinary = require('../../../middlewares/upload_images')
const adminRequest = _axios(PERSONAL_API);


async function createNewAdmin(req, res) {
    try {
        var body = req.body;
        var request = await adminRequest.post(req.path, body);
        var info = request.data;
        return res.status(200).json(info);
    } catch (error) {
        console.log(error);
        return res.status(200).json(error)
    }
}

async function updateImageAdminUser(req, res) {
    try {
        var params = req.body;
        Cloudinary.uploader.upload(params.img,
            async function (err, result) {
                if (err) {
                    return res.status(200).json({
                        code: 'API_AD_403',
                        message: 'It was not possible to store the image. Try again.'
                    });
                }

                params.img = result.secure_url;
                var request = await adminRequest.post(req.path, params);

                var info = request.data;
                return res.status(200).json(info);
            });
    } catch (error) {
        console.log(error);
        return res.status(200).json(error)
    }
}

async function loginAdmin(req, res) {
    try {
        var body = req.body;
        var request = await adminRequest.post(req.path, body);
        var info = request.data;
        var token = encode_admin.encodeMethod(info)
        return res.status(200).json({
            info,
            token:token
        });
    } catch (error) {
        console.log(error);
        return res.status(200).json(error)
    }
}

module.exports = {
    loginAdmin,
    createNewAdmin,
    updateImageAdminUser,

}