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
// const sql = 'INSERT INTO customers (name, email, username) VALUES ?';
// const values = [
//     ['Tim', 'tim@tim.com', 'tim'],
//     ['tina', 'tina@tina.com', 'tina'],
//     ['lara', 'lara@lara.com', 'lara'],
// ]
// con.query(sql, [values], (err, res) => {
//     if (err) throw err;
//     console.log(res)
//     console.log('Records Inserted Into Table...: ' + res.affectedRows)
// })

// Select Data
// const sql = 'SELECT *  FROM customers';
// con.query(sql, (err, res) => {
//     if (err) throw err;
//     console.log(res)
// })

// Select Specific Data
// const sql = 'SELECT name, id FROM customers';
// con.query(sql, (err, res) => {
//     if (err) throw err;
//     console.log(res)
// })

// Where Clause
// const sql = 'SELECT * FROM customers WHERE username = "geosimos"';
// const sql = 'SELECT * FROM customers WHERE username LIKE "t%"';
// const sql = 'SELECT * FROM customers WHERE username LIKE "t%" or id = 1';
// const sql = 'SELECT * FROM customers WHERE username LIKE "t%" and id = 4';
// con.query(sql, (err, res) => {
//     if (err) throw err;
//     console.log(res)
// })

// Order By
// const sql = 'SELECT * FROM customers ORDER BY id DESC';
// con.query(sql, (err, res) => {
//     if (err) throw err;
//     console.log(res)
// })

// Delete
// const sql = 'DELETE FROM customers WHERE username = "tina"';
// con.query(sql, (err, res) => {
//     if (err) throw err;
//     console.log(res)
// })

// Update
// const sql = 'UPDATE customers SET name = "John P. Elder" WHERE name = "Tim"';
// con.query(sql, (err, res) => {
//     if (err) throw err;
//     console.log(res)
// })

// Limit the Results
const sql = 'SELECT * FROM customers LIMIT 2';
con.query(sql, (err, res) => {
    if (err) throw err;
    console.log(res)
})