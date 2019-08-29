const conn = require('../model/config')
module.exports.getProduct = (req, res, next)=>{
    let sql = "select product_name, product_image_url, price from Product";
    conn.query(sql, (err, rs)=>{
        if(err) throw err;
        else(
            res.json(rs)
        )
    })
}