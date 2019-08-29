const mysql      = require('mysql');
const conn = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'tuan311297',
  database : 'queenok'
});
module.exports = conn;