const AssessmentCollection = require('../models/assesmentcollection.model')

const assessmentAddition = (req, res) => {
//   const BatchName  = req.body.BatchName;
//   const AssessmentTopic = req.body.AssessmentTopic
//   const AssessmentDate = req.body.AssessmentDate
//   const totalNumberOfQuestions = req.body.totalNumberOfQuestions
//   const assessmentTotalMarks = req.body.assessmentTotalMarks
  const newAssessment = new AssessmentCollection({ ...req.body })
  newAssessment.save(err => {
    if(err){
        res.send(err)
    }else{
        res.send({ message: "Assessment added successfully" });
    }
  })
};


module.exports = { assessmentAddition };
