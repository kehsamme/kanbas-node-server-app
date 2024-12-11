import * as dao from "./dao.js"

export default function QuestionRoutes(app) {

  app.delete("/api/questions/:questionId", async (req, res) => {
    const { questionId } = req.params;
    const status = await dao.deleteQuestion(questionId);
    res.send(status);
  });

  app.put("/api/questions/:questionId", async (req, res) => {
   const { questionId } = req.params;
   const questionUpdates = req.body;
   const status = await dao.updateQuestion(questionId, questionUpdates);
   res.send(status);
 });
  // quizzes
  app.post("/api/quizzes/:quizId/questions", async (req, res) => {
    const { quizId } = req.params;
    const question = {
      ...req.body,
      quiz: quizId,
    };
    const newQuestion = await dao.createQuestion(question);
    res.send(newQuestion);
  });

  // retrieve

  app.get("/api/quizzes/:quizId/questions", async (req, res) => {
    const { quizId } = req.params;
    console.log("Received quizId in server:", quizId); 
    const questions = await dao.findQuestionsForQuiz(quizId);
    console.log("Questions found:", questions);
    res.json(questions);
  });

  app.get("/api/questions", async (req, res) => {
    const courses = await dao.findAllQuestions();
    res.send(courses);
});
 

  
 }

