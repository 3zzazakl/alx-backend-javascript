export const cpp = {
    subjectName: 'C++',
    getRequirments: () => 'Must have C++ knowledge',
    getAvailableTeacher: (teacher: {
        experienceTeachingC: number
    }) => teacher.experienceTeachingC > 5 ? 'Available Teacher' : 'No available teacher',
};

export const java = {
    subjectName: 'Java',
    getRequirments: () => 'Must have java knowledge',
    getAvailableTeacher: (teacher: {
        experienceTeachingJava: number
    }) => teacher.experienceTeachingJava > 5 ? 'Available Teacher' : 'No available teacher',
};

export const react = {
    subjectName: 'React',
    getRequirments: () => 'Must have React knowledge',
    getAvailableTeacher: (teacher: {
        experienceTeachingReact: number
    }) => teacher.experienceTeachingReact > 5 ? 'Available Teacher' : 'No available teacher',
};

export const CTeacher = {
    experienceTeachingC: 10,
    experienceTeachingJava: 10,
    experienceTeachingReact: 10,
};

console.log(cpp.subjectName);
console.log(CTeacher);
console.log(cpp.getRequirments());
console.log(cpp.getAvailableTeacher(CTeacher));

console.log(java.subjectName);
console.log(CTeacher);
console.log(java.getRequirments());
console.log(java.getAvailableTeacher(CTeacher));

console.log(react.subjectName);
console.log(CTeacher);
console.log(react.getRequirments());
console.log(react.getAvailableTeacher(CTeacher));
