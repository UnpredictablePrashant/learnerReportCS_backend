const express = require("express");
const routes = express.Router();

const assignmentController =  require('../controllers/assignment.controller')



routes.post("/postAssignment", assignmentController.postAssignment)
routes.get("/getAssignments",assignmentController.getAssignment)
routes.get("/getAssignments/:id",assignmentController.getAssignmentbyId)


module.exports = routes;