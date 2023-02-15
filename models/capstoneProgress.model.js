const mongoose = require("mongoose");
const { Schema } = mongoose;

let capstoneProgressSchema = Schema(
  {
    studentId: {
        type: Schema.Types.ObjectId,
        require: true,
    },
    email: {
        type: String,
    },
    capstoneStartDate: {
        type: Date,
    },
    capstoneEndDate: {
        type: Date,
    },
    capstonePhaseMarks: {
        Phase1:{
            Marks: {
                type: Number,
            },
            Status: {
                type: String,
            }
        },
        Phase2:{
            Marks: {
                type: Number,
            },
            Status: {
                type: String,
            }
        },
        Phase3:{
            Marks: {
                type: Number,
            },
            Status: {
                type: String,
            }
        }           
    },
    capstoneProjectName: {
        type: String,
    },
    capstoneSkillRequired:[
        String
    ],
    Type: {
        type: String,
        enum: {
            values: ['group', 'single'],
            message: '{VALUE} is not supported'
        },
    },
    groupMember: [
        String
    ],
    finalSubmission: {
        type: Boolean,
    },
    capstoneAttendance: {
        // take this from already attendance piece done
        type: Number,
    },
    Status: {
        type: String,
        enum: {
            values: ['On Going', 'Not Active', 'Not Started',
             'Completed', 'Late Submission', 'Not Qualified'
            ],
            message: '{VALUE} is not supported'
        },
    },
    facultyComment: {
        type: String,
    },
    finalPitchPptFile: {
        type: String,
    },
    finalPitchPptUploadDateTime:{
        type: Date,
    },
    finalPresentationMarks: {
        type: Number,
    },
    projectLink: {
        type: String,
    },
    facultyResponsible: {
        type: String,
    },
    totalSubmissionRate: {
        type: Number,
    },

  },
  {
    collection: "capstoneProgressInfo",
  }
);

const capstoneProgress = mongoose.model("capstoneProgressInfo", capstoneProgressSchema);

module.exports = capstoneProgress;
