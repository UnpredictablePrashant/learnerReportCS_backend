const AttendanceModel = require('../models/attendance.model');
const studentModel = require('../models/student.model');
const CapstoneAttendance = require('../models/capstoneAttendance.model')
const attendanceRegister = async (req, res) => {
	const req_JSON_attencdance = req.body;
	console.log(req_JSON_attencdance);
	// Find student record
	//  const student = await studentModel.findOne({_id});
	//  if( !student ) return res.status(400).send({ message: `Student not found for index no. - ${req_JSON_attencdance.indexNo}` });

	// Create an Attendance record
	const attendance = new AttendanceModel({
		BatchName: req_JSON_attencdance.BatchName,
		StudentName: req_JSON_attencdance.StudentName,
		attendanceDate: req_JSON_attencdance.attendanceDate,
		isPresent: req_JSON_attencdance.isPresent,
	});

	// Save Attendance record in the database
	try {
		const checkRec = await AttendanceModel.findOne({
			attendanceDate: attendance.attendanceDate,
		});
		if (checkRec) {
			const updateRec = await AttendanceModel.findOneAndUpdate(
				{ attendanceDate: attendance.attendanceDate },
				{ isPresent: attendance.isPresent },
				{ new: true },
			);

			res.send(updateRec);
		} else {
			const savedRecord = await attendance.save();
			res.send({
				message: 'SUCCESS',
				savedRecord,
			});
		}
		// const updatedStudent = await studentModel.findByIdAndUpdate(student._id, {$push: {attendance: savedRecord._id}}, {new: true});
	} catch (err) {
		console.log('error: ', err);
		res.status(500).send({
			message:
				err.message ||
				'Some error occurred while creating the Attendance record.',
			error: err.code,
		});
	}
};

const getattendance = async (req, res) => {
	await AttendanceModel.find({ studentId: req.params.id }, (err, result) => {
		if (result) {
			res.send(result);
		} else {
			res.send(err);
		}
	}).clone();
};

const getAbsentCount = async (req, res) => {
	try {
		const attCount = [];
		const totalAttendance = await AttendanceModel.find({
			studentId: req.params.id,
		}).count();
    const absentAttendance = await AttendanceModel.find({
      isPresent: false,
			studentId: req.params.id,
		}).count();

    const presentAttendance = await AttendanceModel.find({
      isPresent: true,
			studentId: req.params.id,
		}).count();
		attCount.push({
			totalAttendance: totalAttendance,
      absent: absentAttendance,
      present: presentAttendance,
		});

		res.status(200).send({ success: true, data: attCount });
	} catch (error) {
		res.status(400).send({ success: false });
	}
};

const capstoneAttendance = async(req,res)=>{
	try{
		// let student = await CapstoneAttendance.find({SessionDate: req.body.SessionDate})
		// if(student.length>0){
		// 	let updatedAttendance = await CapstoneAttendance.findOneAndUpdate({StudentName:req.body.StudentName},{Attendance:req.body.Attendance},{new:true})
		// 	// console.log("student", student)
		// 	// console.log("ua",updatedAttendance)
		// }
		// else{
			let attendance = await CapstoneAttendance.create(req.body)
		    // console.log(attendance)
		// }
		res.status(200).send("Attendance Updated Successfully")
	}
	catch(err){
		res.status(400).send(err)
	}
}

const getCapstoneAttendanceId = async (req,res) => {
	try{
		let student = await CapstoneAttendance.find({StudentId:req.params.id})
		console.log(student)
		res.send(student)
	}catch{
		res.send({message: 'Something went Wrong'})
	}
}

const getCapstoneAttendanceValue = async (req,res) => {
	try{
		let student = await CapstoneAttendance.find({StudentId:req.params.id})
		let absentVal = 0;
		let presentVal = 0;
		student.map((attendance) => {
			if(attendance.Attendance == 'Absent'){
				absentVal++
			}else{
				presentVal++
			}
		})
		console.log('absent: ', absentVal)
		console.log('present: ', presentVal)
		res.send({totalAttendance: absentVal+presentVal, absent: absentVal, present: presentVal})
	}catch{
		res.send({message: "Something went wrong"})
	}
}

module.exports = { attendanceRegister, capstoneAttendance, getattendance, getAbsentCount,getCapstoneAttendanceId, getCapstoneAttendanceValue };
