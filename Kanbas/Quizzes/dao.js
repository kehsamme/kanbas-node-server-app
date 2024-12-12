import model from "./model.js";

export function createQuiz(quiz) {
    delete quiz._id;
    return model.create(quiz);
};
export function findQuizzesForCourse(courseId) {
    return model.find({ course: courseId });
}
export function deleteQuiz(quizId) {
    console.log("delete quiz dao");
    return model.deleteOne({ _id: quizId });
   }
export function updateQuiz(quizId, quizUpdates) {
    return model.updateOne({ _id: quizId }, quizUpdates);
}

