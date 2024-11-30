import Database from "../Database/index.js";
//import Enrollment from "../Database/index.js";

export const getAllEnrollments = () => {
  return Database.enrollments;
};

export const findEnrollmentsForUser = (userId) => {
  //console.log("find enrollments by user id: ", userId);
  //console.log(Database.enrollments);

  //console.log(Database.enrollments.filter((e) => e.user === userId))
  return Database.enrollments.filter((e) => e.user === userId);
};

export function enrollUserInCourse(userId, courseId) {

  //console.log("In enrollUserInCourse ...");
  //const { enrollments } = Database;

 // console.log("enrollments...");
  //console.log(enrollments);

  //const newEnrollment = { ...enrollments, _id: Date.now(), user: userId, course: courseId};

  //console.log(Database.enrollments);

const newEnrollment = {
    _id: Date.now(), // Generate or fetch a unique ID
    user: userId,
    course: courseId,
  };

  //console.log("newEnrollment...");
  //console.log(newEnrollment);
  Database.enrollments.push(newEnrollment);

  //console.log(Database.enrollments);
  return Database.enrollments;

}

export const unenrollUserInCourse = (userId, courseId) => {
  // Database.enrollments.filter(
  //     (e) => !(e.user === userId && e.course === courseId)
  // );
  // return enrollments;

  const index = Database.enrollments.findIndex(
    (e) => e.user === userId && e.course === courseId
  );

  // If the enrollment is found, remove it
  if (index !== -1) {
    Database.enrollments.splice(index, 1);
  }

  //return Database.enrollments.filter((e) => !(e.user === userId && e.course === courseId));

  return Database.enrollments;
};
