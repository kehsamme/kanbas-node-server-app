import * as dao from "./dao.js"

export default function ScoresRoutes(app) {
    app.put("/api/scores/:scoreId", async (req, res) => {
        const {scoreId} = req.params;
        const scoreUpdates = req.body;
        const status = await dao.updateScore(scoreId, scoreUpdates);
        res.send(status);
    });

    app.get("/api/users/:userId/scores", async (req, res) => {
        const {userId} = req.params;
        const scores = await dao.findScoresForUser(userId);
        res.json(scores);
    });

    app.get("/api/quizzes/:qid/scores", async (req, res) => {
        const {qid} = req.params;
        const scores = await dao.findScoresForQuiz(qid);
        res.json(scores);
    });

    app.get("/api/scores", async (req, res) => {
        const scores = await dao.findAllScores();
        res.json(scores);
    })

    app.post("/api/scores", async(req, res) => {
        const score = {
            ...req.body,
        };
        const newScore = await dao.createScore(score);
        res.send(newScore);
    })
}