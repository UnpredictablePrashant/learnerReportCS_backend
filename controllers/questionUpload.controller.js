const Questions = require("../models/questionUpload.model");

const addQuestion =  (req, res) => {
  const question_title = req.body.question_title;
  
    Questions.findOne({question_title}).then(user=>{

        if(user){
          res.status(400).json({ message: "Question already exist" });
        } else {

          try {
            const newQuestion = new Questions({
              ...req.body,
            });
            
            newQuestion.save();
            res.status(200).json({message:"question uploaded successfully",status:"done"});
          } catch (error) {
            res.status(400).json({ message: error.message });
          }
        }
    })
};

const getAllQuestions = (req, res) => {
  Questions.find({}, (err, result) => {
    console.log(result);
    res.send(result);
  });
};

module.exports = { addQuestion , getAllQuestions };
