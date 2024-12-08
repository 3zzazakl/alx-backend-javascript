namespace Subjects {
    export class Java extends Subject {
        constructor(teacher: Teacher) {
            super(teacher);
        }

        getRequirments(): string {
            return 'Here is the list of requirements for Java';
        }

        getAvailableTeachers(): string {
            return this.teacher.experienceTeachingJava
                ? `Available Teacher: ${this.teacher.firstName}` : 'No available teacher';
        }
    }
}
