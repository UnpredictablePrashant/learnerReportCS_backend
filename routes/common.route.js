const express = require("express");
const routes = express.Router();
const getAllData  = require("../controllers/common/fetchAll");


routes.post("/getAllBatchStudent", getAllData.getBatchStudent)
routes.get("/getAllBatch", getAllData.getAllBatch)
routes.post("/capstonedata", getAllData.postCapstoneData)
module.exports = routes;