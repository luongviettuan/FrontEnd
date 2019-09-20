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