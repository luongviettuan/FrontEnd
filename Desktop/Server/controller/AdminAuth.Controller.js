const conn = require('../model/config')
const jwt = require('jsonwebtoken');
const md5 = require('md5');
module.exports.postLoginAdmin= (req, res, next)=>{
    const {username, password} = req.body;
    if(username && password){
        let hashPassword = md5(password)
        let sql = `SELECT * FROM Admin WHERE username = '${username}' AND password = '${hashPassword}'`;
        conn.query(sql, (err, rs)=>{
            if(err) throw err;
            else{
                if(rs.length > 0){
                    let token = jwt.sign({ username: username }, 'queeok');
                    res.json({
                        code: 200,
                        token: token
                    })
                }
                else{
                    res.json({
                        code: 403,
                        message: 'Tên Tài Khoản Hoặc Mật Khẩu Không Chính Xác'
                    })
                }
            }
        })
    }
}