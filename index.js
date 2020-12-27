const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/MiniSocialMedia", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false, retryWrites: true });

app.listen(3000, (req, res) => {
    console.log("http://localhost:3000");
});
