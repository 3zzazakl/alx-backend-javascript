namespace Subjects {
    export class Cpp extends Subject {
        constructor(teacher: Teacher) {
            super(teacher);
        }

        getRequirments(): string {
            return 'Here is the list of requirements for Cpp';
        }

        getAvailableTeachers(): string {
            return this.teacher.experienceTeachingC
                ? `Available Teacher: ${this.teacher.firstName}` : 'No available teacher';
        }
    }
}
