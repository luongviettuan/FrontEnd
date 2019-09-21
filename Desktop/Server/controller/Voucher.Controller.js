const conn = require('../model/config');
module.exports.getAllVoucher = (req, res, next) => {
    let sql = "SELECT * FROM Voucher";
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