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
module.exports.findVoucher = (req, res, next)=>{
    let {q} = req.body;
    let sql = `select * from Voucher where concat(voucher_id, voucher_name) like "%${q}%"`
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
module.exports.getVoucherByName = (req,res, next)=>{
    const voucher_id = req.body.voucher_id;
    let sql = `SELECT * FROM Voucher WHERE voucher_id = "${voucher_id}"`;
    conn.query(sql, (err, rs)=>{
        if(err) throw err;
        else if(rs.length >0){
            res.json({
                code : 200,
                result : rs
            })
        }
        else{
            res.json({
                code : 403,
                result : 'Voucher Không Hợp Lệ'
            })
        }
    })
}