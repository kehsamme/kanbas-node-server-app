import * as dao from "./dao.js";
import * as modulesDao from "../Modules/dao.js";
import * as assignmentsDao from "../Assignments/dao.js";
import * as enrollmentsDao from "../Enrollments/dao.js"
import * as quizzesDao from "../Quizzes/dao.js";



export default function CourseRoutes(app) {
  //modules
    app.post("/api/courses/:courseId/modules", async (req, res) => {
        const { courseId } = req.params;
        const module = {
          ...req.body,
          course: courseId,
        };
        const newModule = await modulesDao.createModule(module);
        res.send(newModule);
      });
    app.get("/api/courses/:courseId/modules", async (req, res) => {
        const { courseId } = req.params;
        const modules = await modulesDao.findModulesForCourse(courseId);
        res.json(modules);
    });    

    // courses
    app.put("/api/courses/:courseId", async (req, res) => {
        const { courseId } = req.params;
        const courseUpdates = req.body;
        const status = await dao.updateCourse(courseId, courseUpdates);
        res.send(status);
    });
    
    app.get("/api/courses", async (req, res) => {
        const courses = await dao.findAllCourses();
        res.send(courses);
    });
    app.delete("/api/courses/:courseId", async (req, res) => {
        const { courseId } = req.params;
        const status = await dao.deleteCourse(courseId);
        res.send(status);
    });
    app.post("/api/courses", async (req, res) => {
        const course = await dao.createCourse(req.body);
        const currentUser = req.session["currentUser"];
        if (currentUser) {
            await enrollmentsDao.enrollUserInCourse(currentUser._id, course._id);
        }
        res.json(course);
      });
    
    // assignments
    app.post("/api/courses/:courseId/modules", async (req, res) => {
      const { courseId } = req.params;
      const module = {
        ...req.body,
        course: courseId,
      };
      const newModule = await modulesDao.createModule(module);
      res.send(newModule);
    });
  app.get("/api/courses/:courseId/modules", async (req, res) => {
      const { courseId } = req.params;
      const modules = await modulesDao.findModulesForCourse(courseId);
      res.json(modules);
  });    

    app.post("/api/courses/:courseId/assignments", async (req, res) => {
        const { courseId } = req.params;
        const assignment = {
            ...req.body, // Assignment data sent by the client
            course: courseId,
        };
       console.log("Received assignment:", assignment); // Log incoming data
        const newAssignment = await assignmentsDao.createAssignment(assignment);
        console.log("Created assignment:", newAssignment); // Log created assignment
        res.send(newAssignment); // Send back the created assignment
    });

    app.get("/api/courses/:courseId/assignments", async (req, res) => {
        const { courseId } = req.params;
        const assignments = await assignmentsDao.findAssignmentForCourse(courseId);
        console.log(" in find assingment for course", assignments)
        res.json(assignments);
    });
    
    app.get("/api/courses/assignments", async (req, res) => {
        const assignments = await assignmentsDao.findAllAssignments();
        res.send(assignments);
    });

    // quizzes
      app.post("/api/courses/:courseId/quizzes", async (req, res) => {
        const { courseId } = req.params;
        const quiz = {
          ...req.body,
          course: courseId,
        };
        const newQuiz = await quizzesDao.createQuiz(quiz);
        res.send(newQuiz);
      });

      // retrieve
      app.get("/api/courses/:courseId/quizzes", async (req, res) => {
        const { courseId } = req.params;
        const quizzes = await quizzesDao.findQuizzesForCourse(courseId);
        res.json(quizzes);
      });
     
    }
    // // Assignments Implementation
    // app.get("/api/courses/:courseId/assignments", (req, res) => {
    //     const { courseId } = req.params;
    //     const assignments = assignmentsDao.findAssignmentForCourse(courseId);
    //     res.json(assignments);
    //   });
    
    

