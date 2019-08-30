const mysql = require('mysql');
const database = require('../../config/database');
const connection = mysql.createConnection(database.mysql);

connection.connect();

// connection.end();

module.exports = connection;