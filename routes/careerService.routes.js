const express = require("express");
const routes = express.Router();
const careerService  = require("../controllers/careerService.controller");
const authorization = require("../middlewares/middleware");

routes.post("/register", careerService.careerServiceRegister);
routes.post("/login", careerService.careerServiceLogin);
routes.get("/getcareer", authorization, careerService.getAllCareerServices);
routes.get("/getcareeruser/:id", careerService.getCareerServiceUser)

module.exports = routes;