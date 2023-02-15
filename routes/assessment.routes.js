const express = require("express");
const routes = express.Router();
const AssessmentCollection = require("../controllers/assessmentcollection.controller")


routes.post("/assessment", AssessmentCollection.assessmentAddition)

module.exports = routes;