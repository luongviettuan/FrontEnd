const mysql = require('mysql');

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "tuan311297",
  database: "sqa2"
});
module.exports = con;