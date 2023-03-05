const CapstoneProgressModel = require("../models/capstoneProgress.model")
const mongoose = require("mongoose");

const postCapstoneProgress = (req, res, next) => {
    const capstoneProgress = new CapstoneProgressModel(req.body);
    capstoneProgress.save((err)=>{
        if(err){
            res.status(400).send(err)
        } else {
            res.status(200).send("CapstoneProgress added successfully.")
        }
    })
}

const getCapstoneDetails = async (req, res, next) => {
    const _id = req.params.id;
    try{
      const data = await CapstoneProgressModel.findById({_id})
      // console.log(data)
      res.status(200).send(data)
    }
    catch(err){
      res.status(400).send("An error Occured")
    }
  }

const getAllCapstoneProgress = (req,res,next)=>{
  CapstoneProgressModel.find({},(err,result)=>{
    res.status(200).send(result)
  })
}

const getCapstoneQualification = (req, res, next) =>{
    const studentId = req.query.studentId;
    CapstoneProgressModel.findOne({_id : mongoose.Types.ObjectId(studentId)},'Status', (err, result) => {
      console.log(result.Status);
      res.json({ Status : result.Status });
    });
}

const getCapstoneApproachDate = (req, res, next) =>{
    const studentId = req.query.studentId;
    CapstoneProgressModel.findOne({_id : mongoose.Types.ObjectId(studentId)},'capstoneStartDate capstoneEndDate', (err, result) => {
      res.json({ 
        startDate : result.capstoneStartDate, 
        endDate : result.capstoneEndDate 
      });
    });
}

const getCapstoneSessionAttendance = (req, res, next) =>{
    const studentId = req.query.studentId;
    CapstoneProgressModel.findOne({_id: mongoose.Types.ObjectId(studentId)},'capstoneAttendance', (err, result) => {
      res.json({ 
        capstoneSessionAttendance : result.capstoneAttendance 
      });
    });
}

const getCapstonePerformance = (req, res, next) =>{
    const studentId = req.query.studentId;
    CapstoneProgressModel.findOne({_id: mongoose.Types.ObjectId(studentId)},'capstonePhaseMarks', (err, result) => {
      res.json({ 
        score : result.capstonePhaseMarks,
        totalScore :  result.capstonePhaseMarks.Phase1.Marks 
                    + result.capstonePhaseMarks.Phase2.Marks 
                    + result.capstonePhaseMarks.Phase3.Marks
      });
    });
}


module.exports = {
  postCapstoneProgress,
  getCapstoneDetails,
  getAllCapstoneProgress,
  getCapstoneQualification,
  getCapstoneApproachDate,
  getCapstoneSessionAttendance,
  getCapstonePerformance,
};
