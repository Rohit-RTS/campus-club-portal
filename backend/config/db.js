const mysql = require("mysql2");

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "sql@rohit12",
    database: "campus_club_db"
});

module.exports = db;