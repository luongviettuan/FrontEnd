var mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "tuan311297",
  database: "wsn"
});

module.exports = con;