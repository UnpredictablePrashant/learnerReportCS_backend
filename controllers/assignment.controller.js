const Assignments = require('../models/assignment.model');


const postAssignment = (req,res)=>{
    Assignments.create(req.body).then((data)=>{
        res.status(200).json({
            data,
            message:"Assignment created successfully"
        })
    })
}

const getAssignment = async (req,res)=>{
    try{
        let data =  await Assignments.find({})
        res.status(200).json({
            data,
        })
    }
    catch(err){
        res.status(400).json({
            message:err.message
        })

    }
}

const getAssignmentbyId = async (req,res)=>{
    try{
        let _id = req.params.id
        let data = await Assignments.findById({_id});
        res.status(200).send(data);

    }
    catch(err){
        res.status(400).json({
            message:err.message
        })
    }
}

module.exports = {postAssignment,getAssignment,getAssignmentbyId}