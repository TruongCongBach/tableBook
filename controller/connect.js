let mysql = require('mysql');
module.exports.conncet = mysql.createConnection({
    host      : 'localhost',
    user      : 'root',
    password  : '1',
    database  : 'CRUDBook'
});