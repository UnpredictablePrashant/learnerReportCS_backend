const express = require("express");
const routes = express.Router();
capstoneDataController = require('../controllers/capstonedata.controller')

routes.post("/addCapstoneData", capstoneDataController.addCapstoneData);
routes.get("/", capstoneDataController.getAllCapstoneData)
routes.get("/:id", capstoneDataController.getCapstoneDataById)

module.exports = routes