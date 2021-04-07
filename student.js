// Tells the browser we want JavaScript to run in strict mode.
// This means faster code, but JavaScript needs to be cleaner.
"use strict";

// A definition of a programme
class Programme {
    // Programme code
    #code;
    // Programme name
    #name;

    // Creates a new instance of type Programme
    constructor(code, name) {
        this.#code = code;
        this.#name = name;
    }

    // Get code
    get code() {
        return this.#code;
    }

    // Set code
    set code(value) {
        this.#code = value;
    }

    // Get name
    get name() {
        return this.#name;
    }

    // Set name
    set name(value) {
        this.#name = value;
    }
}

// A definition of a student
class Student {
    // Student ID
    #id;
    // Student name
    #name;
    #programme;

    // Creates a new instance (object) of type Student
    constructor(id, name, programme) {
        // Set the id and name of the object instance
        this.#id = id;
        this.#name = name;
        this.#programme = programme;
    }

    get id() {
        return this.#id;
    }

    set id(value) {
        this.#id = value;
    }

    get name() {
        return this.#name;
    }

    set name(value) {
        this.#name = value;
    }
    // Returns student details as a HTML table row.
    tableRow() {
        return `<tr><td>${this.#id}</td><td>${this.#name}</td><td>${this.#programme.name}</td></tr>`;
    }

}

// An array of students.
var students = [
    new Student("001", "Kevin Chalmers", new Programme("001", "Software Engineering")),
    new Student("002", "Lisa Haskel", new Programme("002", "Computing")),
    new Student("003", "Arturo Araujo", new Programme("003", "Physics")),
    new Student("004", "Chiara De Matteis", new Programme("004", "Foreign Languages"))];

students[i].name

function printStudents() {
   
    // Build html for table.
    var html = 
        `<table border="1">
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Programme</th>
            </tr>`
    ;
          
    // Iterate over all the students
    for (var student of students) {
        html += student.tableRow();
    }
    // End html table.
    html += `</table>`
    html += `<table border="1">
    <tr>
        <th>Name</th>
        <th>ID</th>
        <th>Programme</th>
    </tr>` + "<br>";
    for (var student of students) {
        html += student.tableRow();
    }
        
    // End html table.
    html += `</table>`

    // Get the main element
    var main = document.getElementById("main");
    // Set the innerHTML to html;
    main.innerHTML = html;
} 
