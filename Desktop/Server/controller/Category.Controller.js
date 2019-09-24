const conn = require('../model/config')
module.exports.getAllCategory = (req, res, next) =>{
    let sql = `select * from Category;`
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
