// import Database from "../Database/index.js";
import model from "./model.js";

export function deleteModule(moduleId) {
  return model.deleteOne({ _id: moduleId });
 }
 
export function createModule(module) {
  delete module._id
  console.log("in create module server")
  return model.create(module);
  }
  
export function findModulesForCourse(courseId) {
  return model.find({ course: courseId });
}
export function updateModule(moduleId, moduleUpdates) {
  console.log("in update module server")
  return model.updateOne({ _id: moduleId }, moduleUpdates);
}

// // Assignments Implementation
// export function findAssignmentForCourse(courseId) {
//   const { assignments } = Database;
//   return assignments.filter((assignment) => assignment.course === courseId);
// }

