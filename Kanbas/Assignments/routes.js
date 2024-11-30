import * as dao from "./dao.js";
import * as assignmentsDao from "./dao.js";



export default function AssignmentRoutes(app) {

    app.put("/api/courses/assignments/:assignmentId", (req, res) => {
        const { assignmentId } = req.params;
        const assignmentUpdates = req.body;
        const status = assignmentsDao.udpateAssignment(assignmentId, assignmentUpdates);
        res.send(status);
      });
    
    // ?? how do i use courseid and assignment id
    app.delete("/api/courses/assignments/:assignmentId", (req, res) => {
        const { assignmentId } = req.params;
        const status = assignmentsDao.deleteAssignment(assignmentId);
        res.send(status);
      });
    
    app.post("/api/courses/assignments", (req, res) => {
        const assignment = {
            ...req.body, // Assignment data sent by the client
        };
       // console.log("Received assignment:", assignment); // Log incoming data
    
        const newAssignment = assignmentsDao.createAssignment(assignment);
        //console.log("Created assignment:", newAssignment); // Log created assignment
    
        res.send(newAssignment); // Send back the created assignment
    });

    app.get("/api/courses/:courseId/assignments", (req, res) => {
        const { courseId } = req.params;
        const assignments = assignmentsDao.findAssignmentForCourse(courseId);
        res.json(assignments);
    });



}
