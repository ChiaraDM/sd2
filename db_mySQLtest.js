// Import MySQL library

const mysql = require('mysql');

// Connect to the database.
// Assumes there is a root user with no password.
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "students"
});

// Function is callback when connection completed.
// err is any error message that occurs
con.connect(function(err) {
    // If an error, print it out.
    if (err) {
        return console.error(err.message);
    }
    console.log("Connected to students database.");
});

// SQL query to run
var sql = "SELECT * FROM Modules";

// Execute SQL query, and run function on result
con.query(sql, function(err, result) {
    // If error display
    if (err) {
        return console.error(err.message);
    }
    // Print the code column and name from row separated by a tab \t
    for (var row of result) {
        console.log("Modules:" + "\t" + row.code + "\t" + row.name);
        /* PSEUDOCODE: 
        rows = EXECUTE QUERY ON  Database
        FOR EACH row IN rows
            PRINT row["code"] TAB row["name"] */
    };
});

var sql = "SELECT * FROM Students";
con.query(sql, function(err, result) {
    if (err) {
        return console.error(err.message);
    }
    for (var row of result) {
        console.log("Students:" + "\t" + row.id + "\t" + row.name); 
    };
});

var sql = "SELECT * FROM Programmes";
con.query(sql, function(err, result) {
    if (err) {
        return console.error(err.message);
    }
    for (var row of result) {
        console.log("Programmes:" + "\t" + row.id + "\t" + row.name);
    };
});

var sql = `SELECT Modules.name
FROM Programmes, Modules, Programme_Modules
WHERE Programmes.name = "BEng Software Engineering"
AND Programme_Modules.programme = Programmes.id
AND Programme_Modules.module = Modules.code`;
con.query(sql, function(err, result) {
    if (err) {
        return console.error(err.message);
    }
    for (var row of result) {
        console.log("Module names:" + "\t" + row.name);
    };
});

/* Close the database connection.
Always close the connection whern you are finished with it.
Function is callback when connection is closed. */
con.end(function(err) {
    // If an error, print it out.
    if (err) {
        return console.error(err.message);
    }
    console.log("Closed connection to students database.");
});