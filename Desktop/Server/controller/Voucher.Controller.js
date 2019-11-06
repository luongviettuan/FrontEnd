const conn = require('../model/config');
const VoucherUtil = require('../util/Voucher.Util');
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
module.exports.createVoucher = async (req, res, next)=>{
    const {voucher_id, voucher_name, discount, unit} = req.body;
    let checkVoucher = await VoucherUtil.checkVoucherId(voucher_id);
    if(checkVoucher !== 0){
        res.json({
            code: 403,
            message: 'Voucher Đã Tồn Tại Trong Hệ Thống'
        })
    }
    else{
        let sql = `INSERT INTO Voucher (voucher_id, voucher_name, unit, discount)`
            + `VALUES ('${voucher_id}', '${voucher_name}', '${unit}', '${discount}')`;
        conn.query(sql, (err,rs)=>{
            if(err) throw err;
            else{
                res.json({
                    code: 200,
                    message: 'Thêm Voucher Thành Công'
                })
            }
        })
    }

}
module.exports.getInfoVoucher = (req, res, next)=>{
    let {voucher_id} = req.body;
    if(voucher_id){
        let sql = `select * from Voucher where voucher_id = '${voucher_id}'`
        conn.query(sql, (err, rs)=>{
            if(err) throw err;
            else{
                res.json({
                    code: 200,
                    result: rs[0]
                })
            }
        })
    }
}
module.exports.updateInfoVoucher = (req,res, next)=>{
    const {voucher_id, voucher_name, discount, unit} = req.body
    if(voucher_id && voucher_name && discount && unit){
        let sql = `UPDATE Voucher SET voucher_id = '${voucher_id}',`
            +` voucher_name = '${voucher_name}',`
            +` unit = '${unit}',`
            +` discount = '${discount}'`
            +`WHERE voucher_id = '${voucher_id}';`
        conn.query(sql, (err, rs)=>{
            if(err) throw err;
            else{
                res.json({
                    code: 200,
                    message: 'Cập Nhật Mã Giảm Giá Thành Công'
                })
            }
        })
    }
}
module.exports.deleteInfoColor = (req, res, next) =>{
    const {voucher_id} = req.body
    if(voucher_id){
        sql = `DELETE FROM Voucher WHERE voucher_id = '${voucher_id}';`
        conn.query(sql, (err, rs)=>{
            if(err) throw err;
            else{
                res.json({
                    code: 200,
                    message: 'Xoá Thông Tin Mã Giảm Giá Thành Công'
                })
            }
        })
    }
}