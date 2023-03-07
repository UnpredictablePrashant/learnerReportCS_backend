const Questions = require("../models/question.model");

const addQuestion =  (req, res) => {
  
    Questions.findOne({Question:req.body.Question}).then(q=>{
        if(q){
          res.status(400).json({ message: "Question already exist" });
        } else {
          Questions.create(req.body).then((data)=>{
            res.status(200).json({
              message:"Question Added Successfully",
              data
            })
          }).catch((err)=>{
            res.status(400).send(err.message)
          })
        }
    })
};

const getAllQuestions = (req, res) => {
  Questions.find({}, (err, result) => {
    console.log(result);
    res.status(200).send(result);
  });
};

module.exports = { addQuestion , getAllQuestions };
