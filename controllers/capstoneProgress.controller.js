const { capstoneProgress } = require("../models/capstoneProgress.model");

const getCapstoneQualification = (req, res, next) =>{
    const studentId = req.params.studentId;
    capstoneProgress.findOne({studentId: studentId},'Status', (err, result) => {
      console.log(result.Status);
      res.json({ Status : result.Status });
    });
}

const getCapstoneApproachDate = (req, res, next) =>{
    const studentId = req.params.studentId;
    capstoneProgress.findOne({studentId: studentId},'capstoneStartDate capstoneEndDate', (err, result) => {
      res.json({ 
        startDate : result.capstoneStartDate, 
        endDate : result.capstoneEndDate 
      });
    });
}

const getCapstoneSessionAttendance = (req, res, next) =>{
    const studentId = req.params.studentId;
    capstoneProgress.findOne({studentId: studentId},'capstoneAttendance', (err, result) => {
      res.json({ 
        capstoneSessionAttendance : result.capstoneAttendance 
      });
    });
}

const getCapstonePerformance = (req, res, next) =>{
    const studentId = req.params.studentId;
    capstoneProgress.findOne({studentId: studentId},'capstonePhaseMarks', (err, result) => {
      res.json({ 
        score : result.capstonePhaseMarks,
        totalScore :  result.capstonePhaseMarks.Phase1.Marks 
                    + result.capstonePhaseMarks.Phase2.Marks 
                    + result.capstonePhaseMarks.Phase3.Marks
      });
    });
}

module.exports = {
  getCapstoneQualification,
  getCapstoneApproachDate,
  getCapstoneSessionAttendance,
  getCapstonePerformance,
};
