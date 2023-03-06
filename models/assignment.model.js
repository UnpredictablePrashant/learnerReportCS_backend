const mongoose = require('mongoose');

const schema = mongoose.Schema({
    AssignmentName:{
        type:String,
        required:true
    },
    Questions:{
        type:Array,
    },
    Batch:{
        type:String
    },
    TotalMarks:{
        type:Number,
        required:true
    },
    CreationDate:{
        type:Date,
        default:Date.now()
    },
    SubmissionDueDate:{
        type:Date
    },
    isCorrected:{
        type:Boolean
    },
})

module.exports = mongoose.model("Assignment",schema)