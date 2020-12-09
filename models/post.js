const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    title: {
        type: String,
        require: "Title is require",
        minlength: 4,
        maxlength: 150
    },
    body: {
        type: String,
        require: "Body is require",
        minlength: 4,
        maxlength: 20000

    }
});

module.exports = mongoose.model('Post', postSchema);