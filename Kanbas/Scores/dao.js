import model from "./model.js";

// returns all scores for the user
export function findScoresForUser(userId) {
    return model.find({userId: userId});
}

export function findScoresForQuiz(quizId) {
    return model.find({quizId: quizId});
}

export function findAllScores() {
    return model.find();
}

// update score (attempts++)
export function updateScore(scoreId, scoreUpdates) {
    return model.updateOne({_id: scoreId}, scoreUpdates);
}

// add new score 
export function createScore(score) {
    delete score._id;
    return model.create(score);
}