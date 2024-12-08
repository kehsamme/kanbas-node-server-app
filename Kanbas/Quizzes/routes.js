import * as dao from "./dao.js"

export default function QuizRoutes(app) {

 app.delete("/api/quizzes/:quizId", async (req, res) => {
   const { quizId } = req.params;
   const status = await dao.deleteModule(quizId);
   res.send(status);
 });
 app.put("/api/quizzes/:quizId", async (req, res) => {
  const { quizId } = req.params;
  const quizUpdates = req.body;
  const status = await modulesDao.updateQuiz(quizId, quizUpdates);
  res.send(status);
});
}


  
 
 

//   const findQuizById = async (req, res) => {
//     const {courseId, quizId} = req.params;
//     const quiz = await dao.findQuizById(quizId);
//     res.json(quiz);
// };

//   const findQuizzesForCourse = async (req, res) => {
//     const {courseId} = req.params;
//     console.log("in server", courseId);
//     const quizzes = await dao.findAllQuizzes(courseId);
//     res.json(quizzes);
//   };

//   const createQuiz = async (req, res) => {
//     const { courseId } = req.params;
//     const newQuiz = { ...req.body, courseId: courseId, _id: new Date().getTime().toString() };
//     const quiz = await dao.createQuiz(newQuiz);
//     res.json(quiz);
// };


//   const updateQuiz = async (req, res) => {
//     const { quizId } = req.params;
//     const status = await dao.updateQuiz(quizId, req.body);
//     res.json(status);
//   };

//   const deleteQuiz = async (req, res) => {
//     const {quizId} = req.params;
//     const status = await dao.deleteQuiz(quizId);
//     res.json(status);
//   };
//   const getAllQuiz = async (req, res) => {
//     const status = await dao.findAllQuiz();
//     res.json(status);
//   };

//   app.get("/api/courses/:courseId/quizzes/:quizId", findQuizById);
//   app.get("/api/courses/:courseId/quizzes", findQuizzesForCourse);
//   app.post("/api/courses/:courseId/quizzes", createQuiz);
//   app.put("/api/quizzes/:quizId/editor", updateQuiz);
//   app.delete("/api/quizzes/:quizId", deleteQuiz);
//   app.get("/api/quizzes", getAllQuiz);

