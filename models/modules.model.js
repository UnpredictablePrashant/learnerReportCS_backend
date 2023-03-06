const mongoose = require('mongoose');

const schema = mongoose.Schema({
    ModuleName:{
        type:String,
        required:true
    },
    Program:{
        type:Array,
    }
})

module.exports = mongoose.model("Module",schema)