const CompanyModel = require("../models/company.model");

/**
 * function to add new company details to company collection
 */
const addCompanyDetails = async(req, res) => {
    const companyData = new CompanyModel(req.body);
    companyData.save((err)=>{
        if(err){
            res.status(400).send(err)
        } else {
            res.status(200).send("Company added successfully.")
        }
    })
}

/**
 * function to get all company list from company collection
 */
const getCompanyList = async(req, res) => {
    let result = await CompanyModel.find({});
    if (result) {
        res.status(200).send(result);
    } else {
        res.status(400).send("Error Occured");
    }
}

/**
 * function to get details of company from company collection based on the company name passed in req body
 * @param {companyName} req 
 * @param {*} res 
 */
const getCompanyDetails = async(req, res) => {
    let result = await CompanyModel.find({
        companyName:req.body.companyName
    });
    if (result) {
        res.status(200).send(result);
    } else {
        res.status(400).send("Unable to find Company details");
    }
}

const getJobDetails = async(req, res) => {
    let result = await CompanyModel.find({
        jobApplicationId: req.params.id
    });
    if (result) {
        res.status(200).send(result);
    } else {
        res.status(400).send("Unable to find Job details");
    }
}

module.exports = { addCompanyDetails, getCompanyList, getCompanyDetails, getJobDetails }