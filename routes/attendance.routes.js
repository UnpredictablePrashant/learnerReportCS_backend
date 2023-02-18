const express = require("express");
const routes = express.Router();
const Attendance = require("../controllers/attendance.controller");


routes.post("/register", Attendance.attendanceRegister)
routes.get("/:id", Attendance.getattendance)
module.exports = routes;