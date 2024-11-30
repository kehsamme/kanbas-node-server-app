import Database from "../Database/index.js";

export function updateAssignment(assignmentId, assignmentUpdates) {
    const { assignments } = Database;
    const assignment = assignments.find((assignment) => assignment._id === assignmentId);
    Object.assign(assignment, assignmentUpdates);
    return assignment;
  }
  
export function deleteAssignment(assignmentId) {
    const { assignments } = Database;
    Database.assignments = assignments.filter((assignment) => assignment._id !== assignmentId);
   }
   
export function createAssignment(assignment) {
   // console.log("Data received in DAO:", assignment);

    const newAssignment = { ...assignment, _id: Date.now().toString() };
   // console.log("Assignment being added to database:", newAssignment);
    Database.assignments = [...Database.assignments, newAssignment];
    //console.log("Updated assignments:", Database.assignments); 
    return newAssignment;
  }
  
export function findAssignmentForCourse(courseId) {
  const { assignments } = Database;
  return assignments.filter((assignment) => assignment.course === courseId);
}
