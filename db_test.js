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