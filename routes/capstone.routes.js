const express = require("express");
const { builtinModules } = require("module");
const routes = express.Router();
const capstoneprogess = require("../controllers/capstoneprogress.controller")


routes.get("/capstoneprogress",  capstoneprogess);

module.exports = routes;