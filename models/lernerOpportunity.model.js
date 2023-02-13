const mongoose = require("mongoose");
const { Schema } = mongoose;

let LearnerOpportunitySchema = Schema(
    {
        studentId:{
            type:Object
        },
        studentEmail:{
            type:String
        },
        studentName:{
            type:String
        },
        studentBatch:{
            type:String
        },
        internalRoundStatus:{
            type:Boolean
        },
        studentQualifiedSkill:{
            type:Array
        },
        appliedIn:{
            type:Array
        },
        companyNameApplied:{
            type:Array
        },
        overallStatus:{
            type:String
        },
        generalRemark:{
            type:String
        },
        allStatus:{
            type:Object
        },
    }
)

const LearnerOpportunity = mongoose.model("LearnerOpportunity", LearnerOpportunitySchema);

module.exports = LearnerOpportunity;