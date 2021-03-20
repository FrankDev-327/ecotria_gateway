'use strict';

var express = require('express');
const { PostController } = require('../../../controllers/index');
const { decode } = require('../../../middlewares/index')
var api = express.Router();

api.post('/post_create/', decode.autenticacion,  PostController.createPost)
api.post('/post_list_all/', /*decode.autenticacion,*/ PostController.listAllPosts)

api.post('/post_counter/', PostController.countPostByCategory);

//api.put('/post_update/:_id', /* decode.autenticacion, */ PostController.updateMyPost)
//api.get('/post_lists/', /* decode.autenticacion, */ PostController.listMyPosts);

api.get('/post_view/', decode.autenticacion, PostController.viewMyPosts);
//api.delete('/post_delete/:_id', /* decode.autenticacion, */ PostController.deteleMyPost);

module.exports = api