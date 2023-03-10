const mongoose = require("mongoose");

let schema = mongoose.Schema(
  {
    BatchNumber: {
      type: String,
      require: true,
    },
    StudentEmail: {
      type: String,
    },
    StudentName: {
      type: String,
      require: true,
    },
    StudentId: {
      type: mongoose.Types.ObjectId
    },
    CourseName: {
      type: String,
      require: true
    },
    StartDate: {
      type: String,
    },
    EndDate: {
      type: String,
    },
    FacultyAssigned: {
      type: String,
    },
    CapstoneName: {
      type: String,
    },
    capstoneSkillRequired: {
      String
    },
    finalSubmission: {
      type: Boolean,
    },
    facultyComment: {
      type: String,
    },
    finalPitchPptFile: {
      type: String,
    },
    finalPitchPptUploadDateTime: {
      type: Date,
      default: new Date()
    },
    finalPresentationMarks: {
      type: Number,
    },
    projectLink: {
      type: String,
    },
    Status: {
      type: String
    },
    capstonePhaseMarks: {
      Phase1: {
        Marks: {
          type: Number,
        },
        Status: {
          type: String,
        }
      },
      Phase2: {
        Marks: {
          type: Number,
        },
        Status: {
          type: String,
        }
      },
      Phase3: {
        Marks: {
          type: Number,
        },
        Status: {
          type: String,
        }
      }
    }
  },
  {
    collection: "CapstoneDataInfo",
  }
);

module.exports = mongoose.model("CapstoneDataInfo", schema);

