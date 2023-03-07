const mongoose = require("mongoose");

let schema = mongoose.Schema(
  {
    BatchNumber: {
      type: String,
      require: true,
    },
    StudentName: {
      type: String,
      require: true,
    },
    StudentId:{
        type:mongoose.Types.ObjectId
    },
    CourseName:{
        type:String,
        require:true
    },
    StartDate: {
      type: String,
    },
    EndDate:{
        type:String,
    },

    CapstoneName: {
      type: String,
    }
  },
  {
    collection: "CapstoneDataInfo",
  }
);

module.exports= mongoose.model("CapstoneDataInfo", schema);

