const conn = require('../model/config')
module.exports.getAllBrand = (req, res, next)=>{
    let sql = "Select * from Brand"
        + " inner join("
        + " SELECT brand_id , COUNT(*) as quatity"
        + " FROM Product"
        + " GROUP BY brand_id) as temp"
        + " on Brand.brand_id = temp.brand_id;"
    conn.query(sql, (err, rs)=>{
        if(err) throw err;
        else{
            res.json({
                code : 200,
                result : rs
            })
        }
    })
}
module.exports.findInfoBrand = (req, res, next) =>{
    let q = req.body.q;
    let sql = "Select * from Brand"
        + " inner join("
        + " SELECT brand_id , COUNT(*) as quatity"
        + " FROM Product"
        + " GROUP BY brand_id) as temp"
        + " on Brand.brand_id = temp.brand_id"
        + ` where concat(brand_name, quatity) like "%${q}%"`;
    conn.query(sql, (err, rs)=>{
        if(err) throw err;
        else{
            res.json({
                code:200,
                result : rs
            })
        }
    })
}
module.exports.getProductByBrand =(req, res, next) =>{
    let brand_id = req.params.brandId;
    let sql = `select * from Product inner join Brand on Product.brand_id = Brand.brand_id where Brand.brand_id = ${brand_id}`;
    conn.query(sql, (err,rs )=>{
        if(err) throw err;
        else{
            res.json({
                code : 200,
                result : rs
            })
        }
    })
}