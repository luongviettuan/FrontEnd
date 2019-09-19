const conn = require('../model/config')
const UserUtil = {};
UserUtil.checkUsername = function(username){
    return new Promise(function(resolve, reject){
        let sql = `SELECT * FROM User Where username = '${username}'`;
        conn.query(sql, (err, rs)=>{
            if(err)  reject(err);
            else return resolve(rs.length)
        })
    })
}

module.exports = UserUtil;