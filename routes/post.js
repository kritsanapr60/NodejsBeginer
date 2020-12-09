const express = require('express');
const router = express.Router();
const postController = require('../controllers/posts');

router.get('/', postController.getPost);

router.get('/post', postController.createPost);

module.exports = router;