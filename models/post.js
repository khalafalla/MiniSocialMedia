const mongoose = require("mongoose");
const { Schema, models } = mongoose;

const PostSchema = new Schema({
    content: {
        type: String,
        required: true,
    },
    dateCreated: {
        type: Date,
        required: true,
    },
    author: { type: Schema.Types.ObjectId, ref: "User" },
    comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
});

delete mongoose.connection["Post"];
const Post = model("Post", UserSchema);

module.exports = User;
