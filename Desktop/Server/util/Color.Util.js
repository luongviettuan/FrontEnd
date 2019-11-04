const conn = require('../model/config')
const ColorUtil = {};
ColorUtil.checkColorname = function(color_name){
    return new Promise(function(resolve, reject){
        let sql = `SELECT * FROM Color Where color_name = '${color_name}'`;
        conn.query(sql, (err, rs)=>{
            if(err)  reject(err);
            else return resolve(rs.length)
        })
    })
}

module.exports = ColorUtil;