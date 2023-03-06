const mongoose = require('mongoose');

const AssignmentSchema = mongoose.Schema({
    TotalMarks:Number,
    Score:Number
})

const schema = mongoose.Schema({
    StudentId:{
        type:mongoose.Schema.Types.ObjectId,ref:'studentInfo'
    },
    AssignmentMarks:[AssignmentSchema],
    TotalMarks:{
        type:Number,
    },
    TotalAssignmentMarks:{
        type:Number,
    }
})

module.exports = mongoose.model("StudentMarks",schema)