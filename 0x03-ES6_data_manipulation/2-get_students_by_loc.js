function getStudentByLocation(students, city) {
  return students.filter((student) => student.location === city);
}

export default getStudentByLocation;
