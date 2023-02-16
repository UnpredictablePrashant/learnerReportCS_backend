const LearnerOpportunityModel = require("../models/lernerOpportunity.model");

/**
 * function to add new learners opportunity details to Learner Opportunity collection
 * http://localhost:3001/placement/addPlacementOpprotunity
 */
const addLearnerOpportunityDetails = async(req, res) => {
    const opportunityData = new LearnerOpportunityModel(req.body);
    opportunityData.save((err)=>{
        if(err){
            res.status(400).send(err)
        } else {
            res.status(200).send("Learner Opportunity added successfully.")
        }
    })
}

/**
 * function to get all placement opportunity list from learner placement opportunity collection
 * http://localhost:3001/placement/getAllPlacementOpportunity
 */
const getAllPlacementOpportunity = async(req, res) => {
    let result = await LearnerOpportunityModel.find({});
    if (result) {
        res.status(200).send(result);
    } else {
        res.status(400).send("Error Occured");
    }
}

/**
 * function to get details of students placement opportunity from Learner Opportunity collection based on the studentId  passed in req body
 * @param {studentId} req 
 * @param {*} res 
 * this is a POST request: http://localhost:3001/placement/getStudentPlacementOpportunity
 */
const getStudentPlacementOpportunity = async(req, res) => {
    let result = await LearnerOpportunityModel.find({
        studentId:req.body.studentId
    });
    if (result) {
        res.status(200).send(result);
    } else {
        res.status(400).send("Unable to find Company details");
    }
}

module.exports = { addLearnerOpportunityDetails, getAllPlacementOpportunity, getStudentPlacementOpportunity }