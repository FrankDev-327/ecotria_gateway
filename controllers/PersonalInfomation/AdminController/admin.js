'use strict';

const { PERSONAL_API } = require('../../../config/setup')
const { encodeMethodToAdmin } = require('../../../middlewares/encode_admin')
const _axios = require('../../../setup_axios/conf_axios');
const Cloudinary = require('../../../middlewares/upload_images')
const adminRequest = _axios(PERSONAL_API);

async function createNewAdmin(req, res) {
    try {
        const body = req.body;
        const request = await adminRequest.post(req.path, body);
        const info = request.data;
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
        const body = req.body;
        const request = await adminRequest.post(req.path, body);
        const info = request.data;
        const token = await encodeMethodToAdmin(info)
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