const sqlite3 = require("sqlite3").verbose();

let db = new sqlite3.Database("students.db", function(err) {
    if (err) {
        return console.error(err.message);
    }
    console.log("Connected to students database.");
}); 

// SQL Statement to run
// var sql = `INSERT INTO Student VALUES ("100", "Mohammed Ali")`;
// Execute SQL Statement
// db.run(sql);

//var sql = `INSERT INTO Student VALUES ("200", "Ada Lovelace")`;
//db.run(sql, function(err) {
//    if (err) {
//        return console.error(err.message);
//    }
//    console.log("Row inserted into database.")
//});

db.run(`DELETE FROM Student 
WHERE id = \"100\"`, function(err){
    if (err) {
        return console.error(err.message);
    }
    console.log("Row deleted.")
});

db.run(`DELETE FROM Student WHERE id = \"200\"`, function(err){
    if (err) {
        return console.error(err.message);
    }
    console.log("Row deleted.")
});
db.close(function(err) {
    if (err) {
        return console.error(err.message);
    }
    console.log("Close connection to students database.");
});