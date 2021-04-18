// Import express.js
const express = require("express");

// Create express app
var app = express();

// Create a get for root - /
app.get("/", function(req, res) {
    res.send("Hello world!");
});

// Create a get for /goodbye
app.get("/goodbye", function(req, res) {
    res.send("Goodbye world!");
});

// Create a get for /hello/<name> with name provided by user
app.get("/hello/:name", function(req, res) {
    // req.params contains any parameters in the request
    res.send("Hello " + req.params.name);
});

// Start server on port 3000
app.listen(3000);
