// Import MSQL library
const mysql = require("mysql");

/* Connect to the database.
Assumes there is a root user with no password*/
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "students"
});

/* Function is callback when connection completed. 
err is any error message that occurs */
con.connect(function(err) {
    // If an error, print it out.
    if (err) {
        return console.error(err.message);
    }
    console.log("Connected to students database.");
});

// Import express.js
const express = require("express");

// Create express app
var app = express();

// Add static files location
app.use(express.static("static"));

// Create a get for /student
app.get("/student/:id", function(req, res) {
    var sql = `SELECT * FROM Students WHERE id = ${req.params.id}`;
    con.query(sql, function(err, results) {
        if (err) {
            return console.error(err.message);
        }
        // We know there is only one student returned. Get results[0]
        res.json(results[0]);
    });
});

// Create a get for students
app.get("/students", function(req, res) {
    var sql = "SELECT * FROM Students";
    con.query(sql, function(err, results) {
        if (err) {
            return console.error(err.message);
        }
        // Return all students
        res.json(results);
    });
});

// Start server on port 3000
app.listen(3000);
 