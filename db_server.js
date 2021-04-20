// Import SQLite library.
// Use verbose mode to give more detailed error outputs
const sqlite3 = require("sqlite3").verbose();

// Connect to the database.
// Function is callback when connection completed.
// err is any error message that occurs
let db = new sqlite3.Database("students.db", function(err) {
    // If an error, print it out.
    if (err) {
        return console.error(err.message);
    }
    console.log("Connected to students database.");
});

// Import express.js
const express = require("express");
const { connected } = require("process");
// Create express app
var app = express();

// Add static files location
 
app.use(express.static("."));

app.get("/student/:id", function(req, res) {
    var sql = `SELECT * FROM Student WHERE id = "${req.params.id}"`;
    db.get(sql, function(err, row) {
        if (err) {
            return console.error(err.message);
        }
        res.json(row);
    })
})

// Get a programme of a given id
app.get("/programme/:id", function(req, res) {
    var sql = `SELECT * FROM Programmes WHERE id = "${req.params.id}"`;
    db.get(sql, function(err, row) {
        if (err) {
            return console.error(err.message);
            }
            res.json(row);
    })
})

// Get all programmes
app.get("/programmes", function(req, res) {
    var sql = "SELECT * FROM Programmes";
    db.all(sql, function(err, rows) {
        if (err) {
            return console.error(err);
        }
        res.json(rows);
    });
});

// app.get("/student/:id", eventFunction);
// Create a get for /students
app.get("/students", function(req, res) {
    var sql = "SELECT * FROM Student";
    db.all(sql , function(err, rows) {
        if (err) {
            return console.error(err);
        }
        res.json(rows);
    });
});

// Get a module of a given code
app.get("/module/:code", function(req, res) {
    var sql = `SELECT * FROM Modules WHERE code = "${req.params.code}"`;
    db.get(sql, function(err, row) {
        if (err) {
            return console.error(err);
        }
        res.json(row);
    })
});

// Get all modules
app.get("/modules", function(req, res) {
    var sql = "SELECT * FROM Modules";
    db.all(sql, function(err, rows) {
        if(err) {
            return console.error(err);
        }
        res.json(rows);
    });
});


// Start server on port 3000
app.listen(3000);