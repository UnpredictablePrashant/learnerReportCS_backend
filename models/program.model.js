const mongoose = require('mongoose');

const schema = mongoose.Schema({
    ProgramName:{
        type:String,
        required:true
    },
    CreationDate:{
        type:Date,
        default:Date.now()
    }
})

module.exports = mongoose.model("Program",schema)