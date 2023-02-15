const express = require("express");
const routes = express.Router();
const capstoneProgressController  = require("../controllers/capstoneProgress.controller");
const authorization = require("../middlewares/middleware");

routes.post("/postCapstoneProgress", capstoneProgressController.postCapstoneProgress);
routes.get("/getCapstoneProgress", capstoneProgressController.getCapstoneProgress);
routes.get("/getCapstoneQualification", capstoneProgressController.getCapstoneQualification);
routes.get("/getCapstoneApproachDate", capstoneProgressController.getCapstoneApproachDate);
routes.get("/getCapstoneSessionAttendance", capstoneProgressController.getCapstoneSessionAttendance);
routes.get("/getCapstonePerformance", capstoneProgressController.getCapstonePerformance);

module.exports = routes;