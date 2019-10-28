const conn = require('../model/config');
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