const mongoose = require("mongoose");
const { Schema } = mongoose;

let AttendanceSchema = Schema(
  {
    student: {type : mongoose.Schema.ObjectId, ref : 'studentInfo'},
    indexNo: {
      type: String,
      required: true
  },
    BatchName: {
      type: String,
      require: true,
    },
    StudentName: {
      type: String,
      require: true,
    },
    attendanceDate: {
      type: String,
    },
    isPresent: {
      type: Boolean
    },
    TotalClass:{
        type: Number,
        default: 0,
    }
  },
  {
    collection: "AttendanceInfo",
  }
);

const Attendance = mongoose.model("AttendanceInfo", AttendanceSchema);

module.exports = Attendance;
