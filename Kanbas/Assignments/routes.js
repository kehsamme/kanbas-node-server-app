import * as dao from "./dao.js";
import * as assignmentsDao from "./dao.js";



export default function AssignmentRoutes(app) {

    app.put("/api/assignments/:assignmentId", async (req, res) => {
        const { assignmentId } = req.params;
        const assignmentUpdates = req.body;
        const status = await assignmentsDao.updateAssignment(assignmentId, assignmentUpdates);
        res.send(status);
      });
    
    // ?? how do i use courseid and assignment id
    app.delete("/api/assignments/:assignmentId", async (req, res) => {
        const { assignmentId } = req.params;
        const status = await assignmentsDao.deleteAssignment(assignmentId);
        res.send(status);
      });
    
    // app.post("/api/courses/:courseId/assignments", async (req, res) => {
    //     const { courseId } = req.params;
    //     const assignment = {
    //         ...req.body, // Assignment data sent by the client
    //         course: courseId,
    //     };
    //    // console.log("Received assignment:", assignment); // Log incoming data
    
    //     const newAssignment = await assignmentsDao.createAssignment(assignment);
    //     //console.log("Created assignment:", newAssignment); // Log created assignment
    //     res.send(newAssignment); // Send back the created assignment
    // });

    // app.get("/api/courses/:courseId/assignments", async (req, res) => {
    //     const { courseId } = req.params;
    //     const assignments = await assignmentsDao.findAssignmentForCourse(courseId);
    //     res.json(assignments);
    // });
    
    // app.get("/api/courses/assignments", async (req, res) => {
    //     const assignments = await assignmentsDao.findAllAssignments();
    //     res.send(assignments);
    // });
    



}
