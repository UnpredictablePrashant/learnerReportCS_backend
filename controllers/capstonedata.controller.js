const CapstoneData = require("../models/capstoneData.model")

async function addCapstoneData(req, res) {
    console.log(req.body)
    CapstoneData.findOne({ StudentName: req.body.StudentName })
        .then(d => {
            if (d) {
                console.log('Capstone Already exist')
                res.json({ message: "Capstone already exist" });
            } else {
                const newCapstone = new CapstoneData({
                    BatchNumber: req.body.BatchNumber,
                    CapstoneName: req.body.CapstoneName,
                    CourseName: req.body.CourseName,
                    StudentName: req.body.StudentName,
                    StartDate: req.body.StartDate,
                    EndDate: req.body.EndDate,
                    StudentId: req.body.StudentId,
                    FacultyAssigned: req.body.FacultyAssigned,
                    Status: req.body.Status,
                    StudentEmail: req.body.StudentEmail,
                    facultyComment: req.body.facultyComment,
                    finalSubmission: false,
                    finalPitchPptFile: 'https://xyz.com',
                    finalPresentationMarks: 0,
                    projectLink: req.body.projectLink,
                    capstoneSkillRequired: req.body.capstoneSkillRequired,
                    capstonePhaseMarks: {
                        Phase1: {
                            Marks: 0,
                            Status: 'Not Started'
                        },
                        Phase2: {
                            Marks: 0,
                            Status: 'Not Started'
                        },
                        Phase3: {
                            Marks: 0,
                            Status: 'Not Started'
                        }
                    }
                });
                newCapstone.save()
                    .then(data => {
                            res.send({ message: "Capstone Data created successfully" });
                    })
                    .catch(err => res.json({ message: "Capstone not created", err: err }).status(200))

            }
        })
}

async function getAllCapstoneData(req,res){
    CapstoneData.find({})
    .then(data => res.send(data).status(200))
    .catch(err => res.send({message: 'Something went wrong'}))
}

async function getCapstoneDataById(req,res){
    CapstoneData.find({StudentId: req.params.id})
    .then(data => res.send(data).status(200))
    .catch(err => res.send({message: 'Something went wrong'}))
}

module.exports = { addCapstoneData, getAllCapstoneData, getCapstoneDataById }