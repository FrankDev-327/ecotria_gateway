'use strict';

const { MEDIA_API } = require('../../../config/setup')
const _axios = require('../../../setup_axios/conf_axios');
const postRequest = _axios(MEDIA_API);
const Cloudinary = require('../../../middlewares/upload_images')


async function createPost(req, res) {
    try {
        const body = req.body;
        body.email = req.suscriber.email;
        body._id = req.suscriber._id;

        const request = await postRequest.post(req.path, body);
        const info = request.data;
        return res.status(200).json(info);

    } catch (error) {
        console.log(error);
        return res.status(200).json({
            error: error.message,
        });
    }
}

async function listAllPosts(req, res) {
    try {
        const params = req.body;
        const request = await postRequest.post(req.path, params);
        const info = request.data;
        return res.status(200).json(info);
    } catch (error) {
        console.log(error);
        return res.status(200).json({
            error: error.message,
        });
    }
}

async function viewMyPosts(req, res) {
    try {
        const setParams = {
            params: {
                _id: req.query._id
            }
        }
        const request = await postRequest.get(req.path, setParams);
        const info = request.data;
        return res.status(200).json(info);
    } catch (error) {
        console.log(error);
        return res.status(200).json({
            error: error.message,
        });
    }
}

async function countPostByCategory(req, res) {
    try {
        const request = await postRequest.post(req.path);
        const info = request.data;
        return res.status(200).json(info);
    } catch (error) {
        console.log(error);
        return res.status(200).json({
            error: error.message,
        });
    }
}

async function updloadPostImage(req, res) {
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
                const request = await postRequest.post(req.path, params);

                const info = request.data;
                return res.status(200).json(info);
            });

    } catch (error) {
        console.log(error);
        return res.status(200).json({
            error: error.message,
        });
    }
}

async function amoutsPostByDates(req, res) {
    try {
        const params = req.body;
        const request = await postRequest.post(req.path, params);
        const info = request.data;
        return res.status(200).json(info);
    } catch (error) {
        //console.log(error);
        return res.status(200).json({
            error: error.message,
        });
    }
}

async function countingPriceBetweenValues(req, res) {
    try {
        const params = req.body;
        const request = await postRequest.post(req.path, params);
        const info = request.data;
        return res.status(200).json(info);
    } catch (error) {
        //console.log(error);
        return res.status(200).json({
            error: error.message,
        });
    }
}

module.exports = {
    amoutsPostByDates,
    countingPriceBetweenValues,
    viewMyPosts,
    countPostByCategory,
    createPost,
    updloadPostImage,
    listAllPosts
}