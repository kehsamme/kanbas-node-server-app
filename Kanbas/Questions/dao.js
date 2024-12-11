import model from "./model.js";
// export const createQuestion = (question) => {
//     return model.create(question);
// }
// export const findQuestionsForQuiz = (quizId) =>
//     model.find({ quiz: quizId });

// export const updateQuestion = (questionId, question) =>
//     model.updateOne({ _id: questionId }, { $set: question });

// export const deleteQuestion = (questionId) =>
//     model.deleteOne({ _id: questionId });

// export const findQuestionById = (questionId) =>
//     model.find({questionId});

export function findAllQuestions() {
    return model.find();
  }

export function createQuestion(question) {
    delete question._id;
    return model.create(question);
};
export function findQuestionsForQuiz(quizId) {
    console.log("in question",quizId);
    return model.find({ quiz: quizId });
}
export function deleteQuestion(questionId) {
    return model.deleteOne({ _id: questionId });
    }
export function updateQuestion(questionId, questionUpdates) {
    return model.updateOne({ _id: questionId }, questionUpdates);
}
  
  