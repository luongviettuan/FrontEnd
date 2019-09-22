const conn = require('../model/config');
module.exports.getAllProvice = (req, res,next) =>{
    let sql = "SELECT distinct province_id, province_name FROM queenok.Address;"
    conn.query(sql, (err, rs)=>{
        if(err) throw err;
        else res.json({
            code : 200,
            result : rs
        })
    })
}
module.exports.getDistrictByProvince = (req, res, next)=>{
    let province_id = req.body.province_id
    let sql = `SELECT distinct district_id, district_name FROM queenok.Address where province_id = ${province_id};`
    conn.query(sql, (err,rs) =>{
        if(err) throw err;
        else{
            res.json({
                code : 200,
                result : rs
            })
        }
    })
}