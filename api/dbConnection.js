const mysql = require("mysql2");

const db_connection = mysql
    .createConnection({
        host: "localhost", // HOST NAME
        user: "root", // USER NAME
        database: "db_talento_humano", // DATABASE NAME
        password: "", // DATABASE PASSWORD
    })
    .on("error", (err) => {
        console.log("Failed to connect to Database - ", err);
    });

setInterval(function() {
    db_connection.query('SELECT 1');
}, 5000);

module.exports = db_connection;