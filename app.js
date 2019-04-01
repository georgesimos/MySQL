const con = require('./util/database');

// Connect to MySql
con.connect(err => {
    if (err) throw err;
    console.log('Connected to database')
})

