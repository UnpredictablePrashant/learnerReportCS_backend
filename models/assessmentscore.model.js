const mongoose = require("mongoose");
const { Schema } = mongoose;

let AssessmentScoreSchema = Schema(
  {
    SubmissionId: {
        type: Number,
        require: true,
    },
    userId: {
        type: Number,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    submitted: {
      type: Boolean,
    },
    marksObtained: {
        type: Number,
    },
  },
  {
    collection: "AssessmentScore",
  }
);

const AssessmentScore = mongoose.model("AssessmentScore", AssessmentScoreSchema);

module.exports = AssessmentScore;
