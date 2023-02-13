const LearnerOpportunityModel = require("../models/lernerOpportunity.model");

/**
 * function to add new learners opportunity details to Learner Opportunity collection
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

module.exports = { addLearnerOpportunityDetails }