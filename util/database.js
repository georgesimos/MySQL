const mysql = require('mysql')

// Creating connection
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    // database: 'store'
})

module.exports = con