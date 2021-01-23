'use strict';

const { PERSONAL_API } = require('../../config/setup')
const _axios = require('../../setup_axios/conf_axios');
const postRequest = _axios(PERSONAL_API);

async function createPost(req, res) {
    try {
        var body = req.body;
        body.email = req.suscriber.email;
        body._id = req.suscriber._id;

        var request = await postRequest.post(req.path, body);
        var info = request.data;
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
        var request = await postRequest.get(req.path);
        var info = request.data;
        return res.status(200).json(info);
    } catch (error) {
        console.log(error);
        return res.status(200).json({
            error: error.message,
        });
    }
}

module.exports = {
    createPost,
    listAllPosts
}