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

// A get for programme id
app.get("/programme/:id", function(req, res) {
    var sql = `SELECT * FROM Programmes WHERE id = "${req.params.id}"`;
    con.query(sql, function(err , results) {
        if (err) {
            return console.error(err.message);
        }
        res.json(results[0]);
    });
});

// A get for programmes
app.get("/programmes", function(req, res) {
    var sql = "SELECT * FROM Programmes";
    con.query(sql, function(err, results) {
        if(err) {
            return console.error(err.messsage);
        }
        res.json(results);
    });
});

// Get a module from a given code
app.get("/module/:code", function(req, res) {
    var sql = `SELECT * FROM Modules WHERE code = "${req.params.code}"`;
    con.query(sql, function(err , results) {
        if (err) {
            return console.error(err.message);
        }
        res.json(results[0]);
    });
});

// Get all modules
app.get("/modules", function(req, res){ 
    var sql = "SELECT * FROM Modules";
    con.query(sql, function(err, results) {
        if(err) {
            return console.error(err.messsage);
        }
        res.json(results);
    });
});

// Get id, student name, programme name
app.get("/students&programmes", function(req, res) {
    var sql = `SELECT students.id, students.name, programmes.name as programme
    FROM students
    LEFT JOIN student_programme
    ON students.id=student_programme.id
    LEFT JOIN programmes
    ON student_programme.programme=programmes.id;`;
    con.query(sql, function(err, results) {
        if(err) {
            return console.error(err.messsage);
        }
        res.json(results);
    });
});

// Start server on port 3000
app.listen(3000);
 