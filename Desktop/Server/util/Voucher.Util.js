const conn = require('../model/config')
const VoucherUtil = {};
VoucherUtil.checkVoucherId = function(voucher_id){
    return new Promise(function(resolve, reject){
        let sql = `SELECT * FROM Voucher Where voucher_id = '${voucher_id}'`;
        conn.query(sql, (err, rs)=>{
            if(err)  reject(err);
            else{
                console.log(rs);
                return resolve(rs.length)
            }
        })
    })
}

module.exports = VoucherUtil;