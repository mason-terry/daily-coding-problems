/*
This problem was asked by Airbnb.

We're given a hashmap associating each courseId key with a list of courseIds values, which represents that the prerequisites of courseId are courseIds. Return a sorted ordering of courses such that we can finish all courses.

Return null if there is no such ordering.

For example, given {'CSC300': ['CSC100', 'CSC200'], 'CSC200': ['CSC100'], 'CSC100': []}, should return ['CSC100', 'CSC200', 'CSCS300'].
*/

const sortCourses = (courses, toTake) => {
  const keysLen = Object.keys(courses).length;

  for (let course in courses) {
    if (courses[course].length === 0) {
      if (!toTake.includes(course)) {
        toTake.push(course);
      }
    }
    if (JSON.stringify(toTake) === JSON.stringify(courses[course])) {
      if (!toTake.includes(course)) {
        toTake.push(course);
      }
    }
  }

  if (toTake.length !== keysLen) {
    return sortCourses(courses, toTake);
  }

  return toTake;
};

const courses = {
  CSC300: ["CSC100", "CSC200"],
  CSC200: ["CSC100"],
  CSC100: [],
};

const toTake = [];

console.log("Courses to take:", sortCourses(courses, toTake));
