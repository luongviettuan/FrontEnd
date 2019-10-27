const conn = require('../model/config')
const HelpUtil = require('../util/Help.Util')
module.exports.getAllProduct = (req, res, next) => {
    let sql = "select * from Product"
        + " inner join Brand"
        + " on Product.brand_id = Brand.brand_id"
        + " inner join Category"
        + " on Product.category_id = Category.category_id ";
    conn.query(sql, (err, rs) => {
        if (err) throw err;
        else (
            res.json(rs)
        )
    })
}
module.exports.findInfoProduct = (req, res, next) => {
    let q =req.body.q
    let sql = "select * from Product"
        + " inner join Brand"
        + " on Product.brand_id = Brand.brand_id"
        + " inner join Category"
        + " on Product.category_id = Category.category_id"
        + ` where concat(product_name, brand_name, category_name) like "%${q}%"`

    conn.query(sql, (err, rs) => {
        if (err) throw err;
        else (
            res.json({
                code : 200,
                result : rs
            })
        )
    })
}
module.exports.searchProductByName = (req, res, next) => {
    let q = req.query.q;
    let sql = `select product_id, product_name, product_image_url, price from Product where product_name like "%${q}%"`;
    conn.query(sql, [q], (err, rs) => {
        if (err) throw err;
        else (
            res.json({ code: 200, result: rs })
        )
    })
}
module.exports.getProductById = (req, res, next) => {
    let productId = req.params.productId;
    let sql = `SELECT * FROM queenok.Product INNER JOIN Brand ON Product.brand_id = Brand.brand_id WHERE product_id  = ${productId}`
    conn.query(sql, (err, rs) => {
        if (err) throw err;
        else {
            let size = HelpUtil.stringToArray(rs[0].size);
            let color = HelpUtil.stringToArray(rs[0].color);
            let resutl = { ...rs[0], size: size, color: color }
            res.json({
                code: 200,
                result: resutl
            })

        }
    })
}