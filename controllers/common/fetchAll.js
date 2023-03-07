const Student = require("../../models/student.model");
const Batch = require("../../models/batchRegistration.model");
const CapstoneData = require("../../models/capstoneData.model")

const getAllStudent = (req, res) => {
    Student.find({}, (err, result) => {
      console.log(result);
      res.send(result);
    });
  };

  const getBatchStudent = (req, res) => {
    const batchName  = req.body.batchName;
    console.log("batchName" , batchName)
    Student.find({batchName}, (err, result) => {
        console.log("batchName1" , batchName)
    //   console.log(result);
      res.send(result);
    });
  };

  const getAllBatch = (req, res) => {
    Batch.find({}, (err, result) => {
      console.log(result);
      res.send(result);
    });
  };

  const postCapstoneData = (req,res)=>{
   CapstoneData.create(req.body).then((data)=>{
    res.status(200).json({
      data,
      message:"Capstone Data created successfully"
    }).catch((err)=>{
      res.status(400).send(err)
    })
   })
  }
  

module.exports = { getAllStudent, getBatchStudent , getAllBatch,postCapstoneData };