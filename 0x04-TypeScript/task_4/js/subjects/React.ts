namespace Subjects {
    export class React extends Subject {
        constructor(teacher: Teacher) {
            super(teacher);
        }

        getRequirments(): string {
            return 'Here is the list of requirements for React';
        }

        getAvailableTeachers(): string {
            return this.teacher.experienceTeachingReact
                ? `Available Teacher: ${this.teacher.firstName}` : 'No available teacher';
        }
    }
}
