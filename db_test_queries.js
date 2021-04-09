// Import SQLite library.
// Use verbose mode to give more detailed error outputs
const sqlite3 = require("sqlite3").verbose();

// Connect to the database.
// Function is callback when connection completed.
// err is any error message that occurs
let db = new sqlite3.Database("students.db", function(err) {
    // In an error, print it out.
    if (err) {
        return console.error(err.message);
    }
    console.log("Connected to students database.");
});

// SQL query to run
var sql = "SELECT * FROM Modules";
// Execute SQL query, and run function on every row returned.
// db.each (PSEUDOCODE)
// rows = EXECUTE QUERY ON Database
// FOR EACH row IN rows
// PRINT row["code"] TAB row["name"]
db.each(sql, function(err, row) {
    //If error display
    if (err) {
        return console.error(err.message);
    }
    // Print the code column and name column from row separated by a tab \t
    console.log(`1st Query .each:`, row.code + "\t" + row.name);
});

var sql = "SELECT * FROM Modules";
// Execute SQL query, and run function with all rows.
db.all(sql, function(err, rows) {
    // If error display
    if (err) {
        return console.error(err.message);
    }
    for (var row of rows) {
        console.log(`1st Quesry .all:`, row.code + "\t" + row.name);
    }
});

var sql = "SELECT * FROM Modules";
// Execute SQL query, and run function on first row.
db.get(sql, function(err, row) {
    if (err) {
        return console.error(err.message);
    }
    console.log(`1st Query .get:`, row.code + "\t" + row.name);
});

var sql = "SELECT * FROM Student";
db.each(sql, function(err, row) {
    if (err) {
        return console.error(err.message);
    }
    console.log(`2nd Query:`, row.id + "\t" + row.name);
});

var sql = "SELECT * From Programmes";
db.each(sql, function(err, row) {
    if (err) {
        return console.error(err.message);
    }
    console.log(`3rd Query:`, row.id + "\t" + row.name);
});

var sql = "SELECT Modules.name FROM Programmes, Modules, Programme_Modules WHERE Programmes.name = \"BSc Computer Science\" AND Programme_Modules.programme = Programmes.id AND Programme_Modules.module = Modules.code";
db.each(sql, function(err, row) {
    if (err) {
        return console.error(err.message);
    }
    console.log(`4th Query:`, row.name);
});

// Close the database connection. 
// Always close the connection when you are finished with it.
// Function is callback when connection is closed.
db.close(function(err) {
    // In an error, print it out.
    if (err) {
        return console.error(err.message);
    }
    console.log("Close connection to students database.");
});