const mongoose = require("mongoose");
const { Schema, models } = mongoose;

const UserSchema = new Schema({
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    dateOfBirth: {
        type: String,
        required: true,
    },
});

delete mongoose.connection["User"];
const User = model("User", UserSchema);

module.exports = User;
