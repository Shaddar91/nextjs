// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
    res.status(200).json({ name: 'John Doe' })
}


// (A) LOAD DB MODULE
const mysql = require("mysql");

// (B) CREATE CONNECTION - CHANGE TO YOUR OWN !
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "afwefsdfqWAADEQEDW",
    database: "test"
});
db.connect((err) => {
    if (err) { throw err; }
    console.log("DB connection OK");
});

// (C) QUERY
db.query("SELECT * FROM `users`", (err, results) => {
    if (err) { throw err; }
    console.log(results);
});