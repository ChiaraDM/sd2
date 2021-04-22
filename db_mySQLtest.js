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