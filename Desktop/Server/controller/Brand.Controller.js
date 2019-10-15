const conn = require('../model/config')
module.exports.getAllBrand = (req, res, next)=>{
    let sql = `SELECT * FROM Brand`;
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