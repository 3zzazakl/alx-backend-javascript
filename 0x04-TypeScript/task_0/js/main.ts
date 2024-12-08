interface Student {
    firstname: string;
    lastname: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstname: "John",
    lastname: "Doe",
    age: 21,
    location: "New York"
};

const student2: Student = {
    firstname: "Jane",
    lastname: "Smith",
    age: 22,
    location: "California"
};

const studentList: Student[] = [student1, student2];

function renderStudentTable(students: Student[]): void {
    const table = document.createElement("table");

    const headerRow = document.createElement("tr");
    const headerFirstName = document.createElement("th");
    const headerLocation = document.createElement("th");

    headerFirstName.textContent = "First Name";
    headerLocation.textContent = "Location";

    headerRow.appendChild(headerFirstName);
    headerRow.appendChild(headerLocation);

    table.appendChild(headerRow);

    students.forEach((student) => {
        const row = document.createElement("tr");

        const firstNameCell = document.createElement("td");
        firstNameCell.textContent = student.firstname;

        const locationCell = document.createElement("td");
        locationCell.textContent = student.location;

        row.appendChild(firstNameCell);
        row.appendChild(locationCell);
        table.appendChild(row);
    });

    document.body.appendChild(table);
}

renderStudentTable(studentList);
