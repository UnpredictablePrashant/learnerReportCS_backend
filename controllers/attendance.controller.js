const AttendanceModel = require("../models/attendance.model");

const attendanceRegister = (req, res) => {
  const att = req.body;
  console.log(att);
  att.forEach((element) => {
    AttendanceModel.findOne(
      { StudentName: element.StudentName },
      (err, result) => {
        if (result) {
          element.isPresent?result.attendanceDate.presentDate.push(element.date):result.attendanceDate.absentDate.push(element.date);
          console.log("-----------------found record")
          // if (element.isPresent) {
          //   result.attendanceDate.presentDate.push(element.date);
          // } else {
          //   result.attendanceDate.absentDate.push(element.date);
          // }
          let updateResult = AttendanceModel.findOneAndUpdate(
            { StudentName: element.StudentName },
            { 
              attendanceDate : result.attendanceDate
            },
            (err, result) => {
              err?res.send("error occured"):res.send("updated successfully");
              // if(err){
              //   console.log("error occured")
              // } else {
              //   res.send("updated successfully")
              // }
            }
            )

          //update the record with date
        } else {
          console.log("--------------in else loop")
          let payload = {
            BatchName: element.BatchName,
            StudentName: element.StudentName,
            attendanceDate: {
              presentDate: [],
              absentDate: [],
            },
          };
          element.isPresent?payload.attendanceDate.presentDate.push(element.date):payload.attendanceDate.absentDate.push(element.date);
          // if (element.isPresent) {
          //   payload.attendanceDate.presentDate.push(element.date);
          // } else {
          //   payload.attendanceDate.absentDate.push(element.date);
          // }
          const newRecord = new AttendanceModel({ ...payload });
          newRecord.save((err) => {
            err?res.send(err):res.send({ message: "Attendance created successfully" });
            // if (err) {
            //   res.send(err);
            // } else {
            //   res.send({ message: "Attendance created successfully" });
            // }
          });
        }
      }
    );
  });
};

module.exports = { attendanceRegister };
