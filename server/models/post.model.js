const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    admin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
    },
    text: {
        type: String,
        required: true,
    },
    media: {
        type: String,
    },
    public_id: {
        type: String,
    },
    likes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
    }],
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
    }],

}, { timestamps: true });

module.exports = mongoose.model("post", postSchema);