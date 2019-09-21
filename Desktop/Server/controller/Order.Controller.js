const conn = require('../model/config')
module.exports.getAllOrder = (req,res,next)=>{
    let sql = "SELECT * FROM queenok.Order";
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