import mongoose from "mongoose";

const scoreSchema = new mongoose.Schema(
    {
        userId: {type: String},
        quizId: {type: String},
        attempts: {type: Number},
        score: {type: Number},

    }, {
        collection: "scores"
    }
);
export default scoreSchema;