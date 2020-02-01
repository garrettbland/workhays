var mysql = require('mysql')

console.log('CREATE CONNECTION ===>')
console.log(process.env.DEV_DB_HOST)

var pool = mysql.createPool({
  connectionLimit: 10,
  host: process.env.DEV_DB_HOST,
  user: process.env.DEV_DB_USER,
  password: process.env.DEV_DB_PASSWORD,
  database: process.env.DEV_DB_NAME,
  port: process.env.DEV_DB_PORT
})

var DB = (function () {
  function _query (query, params, callback) {
    pool.getConnection(function (err, connection) {
      if (err) {
        connection.release()
        callback(null, err)
        throw err
      }

      connection.query(query, params, function (err, rows) {
        connection.release()
        if (!err) {
          callback(rows)
        } else {
          callback(null, err)
        }
      })

      connection.on('error', function (err) {
        connection.release()
        callback(null, err)
        throw err
      })
    })
  }

  return {
    query: _query
  }
})()

module.exports = DB
