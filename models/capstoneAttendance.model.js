const mongoose = require("mongoose");
const { Schema } = mongoose;

let CapstoneAttendanceSchema = Schema(
  {
    BatchNumber: {
      type: String,
      require: true,
    },
    StudentName: {
      type: String,
      require: true,
    },
    StudentId: {
      type: String,
      require: true
    },
    CourseName:{
        type:String,
        require:true
    },
    SessionDate: {
      type: String,
    },
    Attendance: {
      type: String,
      enum:["Present","Absent"]
    }
  },
  {
    collection: "CapstoneAttendanceInfo",
  }
);

const CapstoneAttendance = mongoose.model("CapstoneAttendanceInfo", CapstoneAttendanceSchema);

module.exports = CapstoneAttendance;
