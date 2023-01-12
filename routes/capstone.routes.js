const express = require("express");
const routes = express.Router();
const capstoneprogess = require("../controllers/capstoneprogress.controller")


routes.get("/capstoneupdate", capstoneprogess.searchstudentprogress);

module.exports = routes;