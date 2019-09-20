const conn = require('../model/config')
const RegitsterUtil = require('../util/Regitster.Util')
module.exports.regitster = async (req, res, next)=>{
    let email = req.body.email;
    let checkEmail = await RegitsterUtil.checkEmail(email)
    if(checkEmail > 0){
        res.json({
            code : 403,
            message : 'Email đã đăng ký nhận tin khuyến mãi'
        })
    }
    else{
        let sql = `INSERT INTO Regitster (email) VALUES ('${email}')`
        conn.query(sql,(err, rs)=>{
            if(err) throw err;
            else{
                res.json({
                    code : 200,
                    message : 'Đăng ký nhận tin khuyến mãi thành công'
                })
            }
        })
    }
}