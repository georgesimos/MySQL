const con = require('./util/database');

// Connect to MySql
con.connect(err => {
    if (err) throw err;
    console.log('Connected to database')
})

// Create Database
con.query('CREATE DATABASE store', (err, res) => {
    if (err) throw err;
    console.log('Database Created')
})