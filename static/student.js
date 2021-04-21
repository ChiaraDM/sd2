/* Tell the browser we want Javascript to run in strict mode.
This means faster code, but Javascript needs to be cleaner. */
"use strict";

class Programme {
    #id;
    #name;

    constructor(id, name) {
        this.#id = id;
        this.#name = name;
    }
    programmeTableRow() {
        return `<tr><td>${this.#name}</td></tr>`;
    }
}
// A definition of a student
class Student {
    // Student ID
    #id;
    // Student name
    #student;
    #name;
    

    // Creates a new instance (object) of type Student
    constructor(id, student, name) {
        // Set the id and name of the object instance
        this.#id = id;
        this.#student = student;
        this.#name = name;
    }

    shortTableRow() {
        return `<tr><td>${this.#id}</td><td>${this.#student}</td></tr>`;
    }

    tableRow() {
        
        return `<tr><td>${this.#id}</td><td>${this.#student}</td><td>${this.#name}</td></tr>`; 
    }
    
}
function printStudents () {
    // get student id, name and programme in the same table
    $.getJSON("/students&programmes", function(result) {
        // Create array of students
        var students = [];
        // Iterate over data returned
        for (var row of result) {
            var student = new Student(row.id, row.student, row.name);
            students.push(student);
        }
        // Build html for table.
        var html = `<table border="1">
            <tr>
                <th>ID</th>
                <th>Name</th>
            </tr>` ;

        for (var student of students) {
            html += student.shortTableRow();
        }
        
        html += `</table>`+ "<br>";

        html += `
            <table border="1">
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Programme</th>
                </tr>
            `;
        // Iterate over all the students
        for (var student of students) {
            html += student.tableRow();
        }
        // End html table.
        html += `</table>` + "<br>";

        $.getJSON("/programmes", function(result) {
            var programmes = [];
            for (var row of result) {
                var programme = new Programme(row.id, row.name);
                programmes.push(programme); 
            }
            html +=  `<table border="1">
                <tr>
                    <th>Programmes</th>
                </tr>` ;
            for (var programme of programmes) {
                html += programme.programmeTableRow();
            }
            html += `</table>`
            // Get the main element
        var main = document.getElementById("main");
        // Set the innerHTML to html
        main.innerHTML = html;  
        })           
    });  
};
