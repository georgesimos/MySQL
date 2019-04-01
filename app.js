const con = require('./util/database');

// Connect to MySql
con.connect(err => {
    if (err) throw err;
    console.log('Connected to database')
})

// Create Database
// con.query('CREATE DATABASE store', (err, res) => {
//     if (err) throw err;
//     console.log('Database Created')
// })

// Create Table
// const sql = 'CREATE TABLE customers (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255),username VARCHAR(255) UNIQUE, email VARCHAR(255))';
// con.query(sql, (err, res) => {
//     if (err) throw err;
//     console.log('Table has been created...')
// })

// Drop Table
// const sql = 'DROP TABLE customers';
// con.query(sql, (err, res) => {
//     if (err) throw err;
//     console.log('Table has been Droped...')
// })

// Alter Table
// const sql = 'ALTER TABLE customers ADD COLUMN username VARCHAR(255)';
// con.query(sql, (err, res) => {
//     if (err) throw err;
//     console.log('Table has been Altered...')
// })

// Insert Into
// const sql = 'INSERT INTO customers (name, email, username) VALUES ("Tester Simos", "tester@gmail.com","tester")';
// con.query(sql, (err, res) => {
//     if (err) throw err;
//     console.log('Data Inserted Into Table...')
// })

// Insert Into (Many)
const sql = 'INSERT INTO customers (name, email, username) VALUES ?';
const values = [
    ['Tim', 'tim@tim.com', 'tim'],
    ['tina', 'tina@tina.com', 'tina'],
    ['lara', 'lara@lara.com', 'lara'],
]
con.query(sql, [values], (err, res) => {
    if (err) throw err;
    console.log(res)
    console.log('Records Inserted Into Table...: ' + res.affectedRows)
})