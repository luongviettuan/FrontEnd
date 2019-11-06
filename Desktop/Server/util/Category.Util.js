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
CategoryUtil.checkNumberProductOfCategory= function(category_id) {
    return new Promise((resolve, reject)=>{
        let sql = `SELECT Category.category_name, Category.category_id, COUNT(product_id) as quatity`
            +` FROM Category`
            +` left join Product`
            +` on Category.category_id = Product.category_id`
            +` where Category.category_id = '${category_id}'`
            +` group by (category_id)`
        conn.query(sql, (err, rs)=>{
            if(err) reject(err);
            else{
                return resolve(rs[0].quatity)
            }
        })
    })
}
module.exports = CategoryUtil;