const mysql = require('mysql');
const database = require('../../config/database');
const pool = mysql.createPool(database.mysql);

// 表名
let table;

// where
let where = [];

module.exports = {

    // 设置表名
    table: function (tableName) {
        table = tableName;
        return this;
    },
    // 查询
    get: function (callback) {
        this.connect(function (connection) {
            const sql = 'select * from ??';
            const values = [table];
            connection.query(sql, values, function (error, results, fields) {
                if (error) throw error;
                connection.release();
                callback(results);
            })
        })
    },
    // query
    query: function (sql, callback) {
        this.connect(function (connection) {
            connection.query(sql, function (error, results, fields) {
                if (error) throw error;
                connection.release();
                callback(results);
            })
        });
    },
    // 连接mysql
    connect: function (connect) {
        pool.getConnection(function (err, connection) {
            if (err) {
                console.error('连接数据库失败');
                throw err;
            }
            connect(connection);
        });
    }
}