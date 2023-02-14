const express = require("express");
const routes = express.Router();

const LearnerPlacement = require("../controllers/learnerOpportunity.controller");

routes.post("/addPlacementOpprotunity", LearnerPlacement.addLearnerOpportunityDetails);
// routes.get("/getCompanyList", Company.getCompanyList);
// routes.post("/getCompanyDetails", Company.getCompanyDetails);

module.exports = routes;