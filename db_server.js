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

// Create express app
var app = express();

// Add static files location
app.use(express.static("static"));

// Create a get for /student
// (debug) function eventFunction(req,res) {
    // (debug) console.log("Hello");
    // Added "" because the id is a string in my db
    //var sql = `SELECT * FROM Student WHERE id = "${req.params.id}"`;
    // (debug) function dbEventFunction(err, row) {
        // (debug) console.log("Before");
      //  if (err) {
       //     return console.error(err.message);
    //    }
      //  res.json(row);
        // console.log('value: ', row)
        // console.log('error ', err)
        // console.log('sql: ', sql)
        // console.log("After");
   // }
    // db.get(sql, dbEventFunction);
    // console.log("Chiara");
//};

app.get("/student/:id", function(req, res) {
    var sql = `SELECT * FROM Student WHERE id = "${req.params.id}"`;
    db.get(sql, function(err, row) {
        if (err) {
            return console.error(err.message);
        }
        res.json(row);
    })
})
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

// Start server on port 3000
app.listen(3000);