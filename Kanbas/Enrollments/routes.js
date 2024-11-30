import * as dao from "./dao.js";
import * as enrollmentsDao from "./dao.js";

export default function EnrollmentRoutes(app) {
    // Fetch all enrollments (optional, for debugging)
    app.get("/api/enrollments", (req, res) => {
        res.json(enrollmentsDao.getAllEnrollments());
    });

    // Enroll a user in a course
    app.post("/api/enrollments", (req, res) => {
        const { userId, courseId } = req.body;
        const enrollment = enrollmentsDao.enrollUserInCourse(userId, courseId);
        res.json(enrollment);
    });

    // Unenroll a user from a course
    app.delete("/api/enrollments", (req, res) => {
        const { userId, courseId } = req.body;
        const unenrolled = enrollmentsDao.unenrollUserInCourse(userId, courseId);
        res.json(unenrolled);
    });

    // Fetch enrollments for a specific user
    app.get("/api/enrollments/:userId", (req, res) => {
        const { userId } = req.params;
        const userEnrollments = enrollmentsDao.findEnrollmentsForUser(userId);
        res.json(userEnrollments);
    });
}
