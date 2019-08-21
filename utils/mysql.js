const mysql = require('mysql');
const database = require('../config/database');
const pool = mysql.createPool(database.mysql);

module.exports = {
    // 查询
    select: function (sql,callback) {
        pool.getConnection(function (err, connection) {
            if (err) throw err;
            connection.query(sql, function (error, results, fields) {
                connection.release();
                if (error) throw error;
                callback(results, fields);
            })
        })
    }
}
