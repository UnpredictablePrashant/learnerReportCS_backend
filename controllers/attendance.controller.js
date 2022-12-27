const AttendanceModel = require("../models/attendance.model");
const studentModel = require("../models/student.model");
const attendanceRegister = async  (req, res) => {
  const req_JSON_attencdance = req.body;
  console.log(req_JSON_attencdance)
 // Find student record
 const student = await studentModel.findOne({ indexNo: req_JSON_attencdance.indexNo });
 if( !student ) return res.status(400).send({ message: `Student not found for index no. - ${req_JSON_attencdance.indexNo}` });

      // Create an Attendance record
      const attendance = new AttendanceModel({
        student: student._id,
        indexNo: req_JSON_attencdance.indexNo,     
        BatchName: req_JSON_attencdance.BatchName,     
        StudentName: req_JSON_attencdance.StudentName,  
        attendanceDate: req_JSON_attencdance.attendanceDate,
        isPresent: req_JSON_attencdance.isPresent
    });

    // Save Attendance record in the database
    try {
        const savedRecord = await attendance.save();
        const updatedStudent = await studentModel.findByIdAndUpdate(student._id, {$push: {attendance: savedRecord._id}}, {new: true});
        res.send({
            message: "SUCCESS",
            savedRecord,
            updatedStudent
        });
    } catch (err) {
       console.log("error: ", err)
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Attendance record.",
            error: err.code
        });
    }

};

module.exports = { attendanceRegister };
