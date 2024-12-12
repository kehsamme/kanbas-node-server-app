import mongoose from "mongoose";

const questionSchema = new mongoose.Schema(
  {
    number: String,
    quiz: { type: mongoose.Schema.Types.ObjectId, ref: "QuizModel" },
    questionType: {
      type: String,
      enum: ["MC", "BLANKS", "TF"],
      default: "MC",
      required: true,
    },
    title: { type: String },
    points: { type: Number },
    question: { type: String },
    options: [{ type: String }],
    answers : [{ type: String }]
  },
  { collection: "questions" }
);
export default questionSchema;