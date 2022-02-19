const express = require("express");

const userController = require("./controllers/userController");
const galleryController = require("./controllers/galleryController");

const app = express();

app.use("/user", userController);
app.use("/gallery", galleryController);

module.exports = app;
