const Post = require('../models/post');

exports.getPost = (req, res) => {
    res.json({
        post: [
            { title: 'First post' },
            { title: 'Second post' }
        ]
    });
};

exports.createPost = (req, res) => {
    const post = new Post(req.body);
    if (err) throw err;
    console.log('Createing Post:', req.body);
    post.save((err, result) => {
        if (err) {
            return res.status(400).json({
                error: err
            });
        }
        res.status(200).json({
            post: result
        });
    })
};