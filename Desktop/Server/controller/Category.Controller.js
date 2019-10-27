const conn = require('../model/config')
module.exports.getAllCategory = (req, res, next) =>{
    let sql = "Select * from Category"
        + " inner join("
        + " SELECT category_id , COUNT(*) as quatity"
        + " FROM Product"
        + " GROUP BY category_id) as temp"
        + " on Category.category_id = temp.category_id"
    
    conn.query(sql, (err, rs)=>{
        if(err) throw err;
        else{
            res.json({
                code: 200,
                result: rs
            })
        }
    })
}
module.exports.findCategory = (req, res, next) => {
    let q = req.body.q
    let sql = "Select * from Category"
        + " inner join("
        + " SELECT category_id , COUNT(*) as quatity"
        + " FROM Product"
        + " GROUP BY category_id) as temp"
        + " on Category.category_id = temp.category_id"
        + ` where concat(category_name, quatity) like "%${q}%"`;
    conn.query(sql, (err, rs) =>{
        if(err) throw err;
        else{
            res.json({
                code :200,
                result : rs
            })
        }
    })
    
}
module.exports.getProductOfCategory = (req, res, next) =>{
    let categoryId = req.params.categoryId;
    let sql = `select * from Product where category_id = "${categoryId}";`
    conn.query(sql, (err, rs)=>{
        if(err) throw err;
        else{
            res.json(rs)
        }
    })
}
