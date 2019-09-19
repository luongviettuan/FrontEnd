const conn = require('../model/config')
const md5 = require('md5')

const UserUtil = require('../util/User.Util')
// module.exports.login = (req, res, next) =>{

// }
module.exports.postLogin = (req, res, next) =>{
    let username = req.body.username
    let password = req.body.password
    let hashedPassword = md5(password)
    let sql = `select username, password from User where username = '${username}' and password = '${hashedPassword}'`;
    conn.query(sql, (err, rs)=>{
        if(err) throw err;
        else if(rs.length > 0){
            res.json({
                code : '200',
                message : 'ok ok'
            })
            next()
        }
        else{
            res.json({
                code : '0',
                message : 'Username hoặc mật khẩu không chính xác'
            })
        }
    })
}
module.exports.PostRegister = async (req, res, next)=>{
    let full_name = await req.body.fullName;
    let phone_number = await req.body.phoneNumber;
    let province_id = await req.body.provinceId;
    let district_id = await req.body.districtId;
    let address_detail = await req.body.addressDetail;
    let username = await req.body.username;
    let hashedPassword = await md5(req.body.password);
    let checkUsername = await UserUtil.checkUsername(username)
    if(checkUsername > 0){
        res.json({
            code : 403,
            message : 'Username đã được sử dụng'
        })
    }
    else{
        let sql = `INSERT INTO User (username, password, full_name, phone_number, province_id, district_id, address_detail)
                    VALUES ('${username}', '${hashedPassword}', '${full_name}', '${phone_number}', ${province_id}, ${district_id}, '${address_detail}');`;
        conn.query(sql,(err, rs)=>{
            if(err) throw err;
            else{
                res.json({
                    code : 200,
                    message : 'Đăng ký tài khoản thành công'
                })
            }
        })
    }
}