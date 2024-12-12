import mongoose from "mongoose";
import scoreSchema from "./schema.js";
const model = mongoose.model("ScoreModel", scoreSchema);
export default model;