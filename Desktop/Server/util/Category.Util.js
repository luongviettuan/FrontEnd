const conn = require('../model/config')
const CategoryUtil = {};
CategoryUtil.checkCategoryname = function(category_name){
    return new Promise(function(resolve, reject){
        let sql = `SELECT * FROM Category Where category_name = '${category_name}'`;
        conn.query(sql, (err, rs)=>{
            if(err)  reject(err);
            else return resolve(rs.length)
        })
    })
}

module.exports = CategoryUtil;