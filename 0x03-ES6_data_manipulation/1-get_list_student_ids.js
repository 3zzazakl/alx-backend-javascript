function getListStudentIds(students) {
  if (!Array.isArray(students)) {
    return [];
  }
  return students.map((student) => student.id);
}

export default getListStudentIds;
