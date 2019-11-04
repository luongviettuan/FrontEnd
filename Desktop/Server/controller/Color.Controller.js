const conn = require('../model/config');
const ColorUtil = require('../util/Color.Util');
module.exports.getAllVoucher = (req, res, next)=>{
    let sql = 'SELECT * FROM Color'
    conn.query(sql, (err, rs)=>{
        if(err) throw err;
        else{
            res.json({
                code : 200,
                result: rs
            })
        }
    })
}
module.exports.findColor = (req, res, next)=>{
    let {q} = req.body;
    let sql =`SELECT * FROM Color WHERE concat(color_name) like "%${q}%"`;
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
module.exports.createColor = async (req, res, next) =>{
    let {color_name} = req. body;
    let checkColorName = await ColorUtil.checkColorname(color_name);
    if(checkColorName !==0){
        res.json({
            code: 403,
            message: 'Màu Sắc Đã Tồn Tại Trong Hệ Thống'
        })
    }
    else{
        let sql=`INSERT INTO Color (color_name) VALUES ("${color_name}");`
        conn.query(sql, (err, rs)=>{
            if(err) throw err;
            else{
                res.json({
                    code: 200,
                    message: 'Thêm Thông Tin Thành Công'
                })
            }
        })
    }
}