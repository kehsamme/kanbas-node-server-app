// import Database from "../Database/index.js";
import model from "./model.js"

export function updateAssignment(assignmentId, assignmentUpdates) {
  return model.updateOne({ _id: assignmentId }, assignmentUpdates);
    // const { assignments } = Database;
    // const assignment = assignments.find((assignment) => assignment._id === assignmentId);
    // Object.assign(assignment, assignmentUpdates);
    // return assignment;
  }
  
export function deleteAssignment(assignmentId) {
  console.log("in delete assignment server")
  return model.deleteOne({ _id: assignmentId });
    // const { assignments } = Database;
    // Database.assignments = assignments.filter((assignment) => assignment._id !== assignmentId);
   }
   
export function createAssignment(assignment) {
  delete assignment._id;
  console.log("in create assignment server")
  return model.create(assignment);

  //  // console.log("Data received in DAO:", assignment);

  //   const newAssignment = { ...assignment, _id: Date.now().toString() };
  //  // console.log("Assignment being added to database:", newAssignment);
  //   Database.assignments = [...Database.assignments, newAssignment];
  //   //console.log("Updated assignments:", Database.assignments); 
  //   return newAssignment;
  }
  
export function findAssignmentForCourse(courseId) {
  return model.find({ course: courseId });
}

// export function findAllAssignments() {
//   return model.find();
//  }
 