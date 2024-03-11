// const mysql = require('mysql2');

// const poll = mysql.createPool({
//     host : 'localhost',
//     user : 'sharpner',
//     database : 'node-completed',
//     password : 'Akki@123'
// });

// module.exports = poll.promise();

//Now By using Sequelize we connect the mysql server

const Sequelize = require('sequelize');

        //below sections formate  schema name ,  username, password  and next parameters are to telling to connect the mysql and localhost
const sequelize = new Sequelize('node-completed', 'sharpner', 'Akki@123', {
    dialect: 'mysql',
    host: 'localhost'
})

module.exports = sequelize;