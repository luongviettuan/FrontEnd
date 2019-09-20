const conn = require('../model/config')
const RegitsterUtil = {};
RegitsterUtil.checkEmail = function(email){
    return new Promise(function(resolve, reject){
        let sql = `SELECT * FROM Regitster Where email = '${email}'`;
        conn.query(sql, (err, rs)=>{
            if(err)  reject(err);
            else return resolve(rs.length)
        })
    })
}

module.exports = RegitsterUtil;