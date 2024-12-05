import model from "./model.js";

export async function findCoursesForUser(userId) {
 const enrollments = await model.find({ user: userId }).populate("course");
 console.log(enrollments, "in findcourseforuser")
 if (Array.isArray(enrollments)) {
  console.log(enrollments, "is an array");
 }
 (Array.isArray(enrollments)) 
  console.log("check if enrollments is array:");
  console.log(enrollments);
 return enrollments.map((enrollment) => enrollment.course);
}

export async function findUsersForCourse(courseId) {
 const enrollments = await model.find({ course: courseId }).populate("user");
 return enrollments.map((enrollment) => enrollment.user);
}
export function enrollUserInCourse(user, course) {
 return model.create({ user, course });
}
export function unenrollUserFromCourse(user, course) {
 return model.deleteOne({ user, course });
}


// PRE mongo implementation
// import Database from "../Database/index.js";
// //import Enrollment from "../Database/index.js";

// export const getAllEnrollments = () => {
//   return Database.enrollments;
// };

// export const findEnrollmentsForUser = (userId) => {
//   //console.log("find enrollments by user id: ", userId);
//   //console.log(Database.enrollments);

//   //console.log(Database.enrollments.filter((e) => e.user === userId))
//   return Database.enrollments.filter((e) => e.user === userId);
// };

// export function enrollUserInCourse(userId, courseId) {

//   //console.log("In enrollUserInCourse ...");
//   //const { enrollments } = Database;

//  // console.log("enrollments...");
//   //console.log(enrollments);

//   //const newEnrollment = { ...enrollments, _id: Date.now(), user: userId, course: courseId};

//   //console.log(Database.enrollments);

// const newEnrollment = {
//     _id: Date.now(), // Generate or fetch a unique ID
//     user: userId,
//     course: courseId,
//   };

//   //console.log("newEnrollment...");
//   //console.log(newEnrollment);
//   Database.enrollments.push(newEnrollment);

//   //console.log(Database.enrollments);
//   return Database.enrollments;

// }

// export const unenrollUserInCourse = (userId, courseId) => {
//   // Database.enrollments.filter(
//   //     (e) => !(e.user === userId && e.course === courseId)
//   // );
//   // return enrollments;

//   const index = Database.enrollments.findIndex(
//     (e) => e.user === userId && e.course === courseId
//   );

//   // If the enrollment is found, remove it
//   if (index !== -1) {
//     Database.enrollments.splice(index, 1);
//   }

//   //return Database.enrollments.filter((e) => !(e.user === userId && e.course === courseId));

//   return Database.enrollments;
// };
