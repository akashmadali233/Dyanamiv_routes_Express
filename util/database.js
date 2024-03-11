const mysql = require('mysql2');

const poll = mysql.createPool({
    host : 'localhost',
    user : 'sharpner',
    database : 'node-completed',
    password : 'Akki@123'
});

module.exports = poll.promise();