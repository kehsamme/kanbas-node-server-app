import Database from "../Database/index.js";

export const getAllEnrollments = () => {
  return enrollments;
};

export const findEnrollmentsForUser = (userId) => {
  return enrollments.filter((e) => e.user === userId);
};

export function enrollUserInCourse(userId, courseId) {
  const { enrollments } = Database;
  enrollments.push({ _id: Date.now(), user: userId, course: courseId });
}

export const unenrollUserInCourse = (userId, courseId) => {
  enrollments = enrollments.filter(
      (e) => !(e.user === userId && e.course === courseId)
  );
  return { userId, courseId };
};
