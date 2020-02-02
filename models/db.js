/*
===========================================================================

Description:
Creates mysql connection pool to database using environment variables and
handles releasing connections automatically. To use, import this file and
run your query.

Example usage:
var DB = require('./db')
DB.query('Select * from table', function (err, res) { ... }

===========================================================================
*/

var mysql = require('mysql')

var pool = mysql.createPool({
  connectionLimit: 10,
  host: process.env.DEV_DB_HOST,
  user: process.env.DEV_DB_USER,
  password: process.env.DEV_DB_PASSWORD,
  database: process.env.DEV_DB_NAME,
  port: process.env.DEV_DB_PORT
})

pool.getConnection((err, connection) => {
  if (err) {
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
      console.error('Database connection was closed.')
    }
    if (err.code === 'ER_CON_COUNT_ERROR') {
      console.error('Database has too many connections.')
    }
    if (err.code === 'ECONNREFUSED') {
      console.error('Database connection was refused.')
    }
  }
  if (connection) connection.release()
})

module.exports = pool
