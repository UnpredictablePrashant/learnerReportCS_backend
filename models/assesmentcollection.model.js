const mongoose = require("mongoose");
const { Schema } = mongoose;

let AssessmentCollectionSchema = Schema(
  {
    AssessmentId: {
        type: Number,
    },
    BatchName: {
      type: String,
      require: true,
    },
    AssessmentTopic: {
      type: String,
      require: true,
    },
    AssessmentDate: {
      type: String,
    },
    totalNumberOfQuestions: {
        type: Number,
    },
    assessmentTotalMarks: {
        type: Number,
    },
  },
  {
    collection: "AssessmentCollection",
  }
);

const AssessmentCollection = mongoose.model("AssessmentCollection", AssessmentCollectionSchema);

module.exports = AssessmentCollection;
