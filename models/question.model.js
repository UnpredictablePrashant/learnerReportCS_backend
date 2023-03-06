const mongoose = require('mongoose');

const schema = mongoose.Schema({
    Question:{
        type:String,
        required:true
    },
    Marks:{
        type:Number,
        required:true
    },
    CreationDate:{
        type:Date,
        default:Date.now()
    },
    ModuleId:{
        type:Array
    },
    Answer:{
        type:String
    },
    Hint:{
        type:String,
    }
})

module.exports = mongoose.model("Question",schema)