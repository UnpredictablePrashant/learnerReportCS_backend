const express = require("express");
const routes = express.Router();

const Company = require("../controllers/company.controller");

routes.post("/addCompanyDetails", Company.addCompanyDetails);
routes.get("/getCompanyList", Company.getCompanyList);
routes.post("/getComapanyDetails", Company.getCompanyDetails);

module.exports = routes;