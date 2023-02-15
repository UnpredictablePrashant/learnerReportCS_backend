const express = require("express");
const routes = express.Router();
const capstoneProgressController  = require("../controllers/capstoneProgress.controller");
const authorization = require("../middlewares/middleware");

routes.get("/getCapstoneQualification", authorization, capstoneProgressController.getCapstoneQualification);
routes.get("/getCapstoneApproachDate", authorization, capstoneProgressController.getCapstoneApproachDate);
routes.get("/getCapstoneSessionAttendance", authorization, capstoneProgressController.getCapstoneSessionAttendance);
routes.get("/getCapstonePerformance", authorization, capstoneProgressController.getCapstonePerformance);

module.exports = routes;