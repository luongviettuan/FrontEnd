const conn = require('../model/config')
const BrandUtil = {};
BrandUtil.checkBrandName = function(brand_name){
    return new Promise(function(resolve, reject){
        let sql = `SELECT * FROM Brand Where brand_name = '${brand_name}'`;
        conn.query(sql, (err, rs)=>{
            if(err)  reject(err);
            else{
                console.log(rs);
                return resolve(rs.length)
            }
        })
    })
}
BrandUtil.checkNumberProductOfBrand= function(brand_id) {
    return new Promise((resolve, reject)=>{
        let sql = `SELECT Brand.brand_name, Brand.brand_id, COUNT(product_id) as quatity`
            +` FROM Brand`
            +` left join Product`
            +` on Brand.brand_id = Product.brand_id`
            +` where Brand.brand_id = '${brand_id}'`
            +` group by (brand_id)`
        conn.query(sql, (err, rs)=>{
            if(err) reject(err);
            else{
                return resolve(rs[0].quatity)
            }
        })
    })
}
module.exports = BrandUtil;