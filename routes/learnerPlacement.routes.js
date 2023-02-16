const express = require("express");
const routes = express.Router();

const LearnerPlacement = require("../controllers/learnerOpportunity.controller");

routes.post("/addPlacementOpprotunity", LearnerPlacement.addLearnerOpportunityDetails);
routes.get("/getAllPlacementOpportunity", LearnerPlacement.getAllPlacementOpportunity);
routes.post("/getStudentPlacementOpportunity", LearnerPlacement.getStudentPlacementOpportunity);

module.exports = routes;