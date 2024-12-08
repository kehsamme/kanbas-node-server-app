import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    availability: { type: Date, required: true }, 
    due: { type: Date, required: true }, 
    points: { type: Number, required: true }, 
    course: { type: mongoose.Schema.Types.ObjectId, ref: "CourseModel", required: true }, 
    description: { type: String, required: false },
  },
  { collection: "assignments", timestamps: true } 
);

export default schema;

