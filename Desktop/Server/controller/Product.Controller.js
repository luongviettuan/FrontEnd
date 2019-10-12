const conn = require('../model/config')
const HelpUtil = require('../util/Help.Util')
module.exports.getAllProduct = (req, res, next)=>{
    let sql = "select product_name, product_image_url, price from Product";
    conn.query(sql, (err, rs)=>{
        if(err) throw err;
        else(
            res.json(rs)
        )
    })
}
module.exports.searchProduct = (req, res, next)=>{
    let q = req.query.q;
    let sql = `select product_name, product_image_url, price from Product where product_name like "%${q}%"`;
    conn.query(sql, [q], (err, rs)=>{
        if(err) throw err;
        else(
            res.json({code : 200, result: rs})
        )
    })
}
module.exports.getProductById = (req, res, next)=>{
    let productId = req.params.productId;
    let sql = `SELECT * FROM queenok.Product INNER JOIN Brand ON Product.brand_id = Brand.brand_id WHERE product_id  = ${productId}`
    conn.query(sql, (err, rs)=>{
        if(err) throw err;
        else{
            let size = HelpUtil.stringToArray(rs[0].size);
            let color = HelpUtil.stringToArray(rs[0].color);
            let resutl = {...rs[0], size : size, color : color}
            res.json({
                code : 200,
                result : resutl
            })
            
        }
    })
}
