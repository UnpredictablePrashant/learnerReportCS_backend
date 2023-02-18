const express = require("express");
const { Register } = require("../controllers/student.controller");
const { StudentLogin , getSingleStudent, updateStudentProfile} = require("../controllers/student.controller");
const {getAllStudent} = require("../controllers/common/fetchAll")
// const authorization = require("../middlewares/middleware");

const routes = express.Router();

routes.post("/register", Register);
routes.post("/login", StudentLogin);
routes.get("/getstudent",  getAllStudent);
routes.get("/:id" , getSingleStudent);
routes.put("/updateStudentProfile/:id",  updateStudentProfile);

module.exports = routes;

