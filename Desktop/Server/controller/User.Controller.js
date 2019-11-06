const conn = require('../model/config')
const md5 = require('md5')
const jwt = require('jsonwebtoken');
const UserUtil = require('../util/User.Util')


module.exports.getAllUser = (req, res, next) => {
    let sql = 'select * from User';
    conn.query(sql, (err, rs) => {
        if (err) throw err;
        else {
            res.json({
                code: 200,
                result: rs
            })
        }
    })
}

module.exports.findUser = (req, res, next) => {
    let q = req.body.q;
    let sql = `SELECT * FROM User WHERE CONCAT(full_name, username, phone_number) LIKE "%${q}%"`
    conn.query(sql, (err, rs) => {
        if (err) throw err;
        else {
            res.json({
                code: 200,
                result: rs
            })
        }
    })
}

module.exports.postLogin = (req, res, next) => {
    let username = req.body.username
    let password = req.body.password
    let hashedPassword = md5(password)
    let sql = `select user_id, full_name, username, password from User where username = '${username}' and password = '${hashedPassword}'`;
    conn.query(sql, (err, rs) => {
        if (err) throw err;
        else if (rs.length > 0) {
            const payload = { username };
            let token = jwt.sign(payload, 'queenok', { expiresIn: '24h' });
            res.json({
                token: token,
                user_id: rs[0].user_id,
                full_name: rs[0].full_name
            });
        }
        else {
            res.sendStatus(201)
        }
    })
}
module.exports.PostRegister = async (req, res, next) => {
    let full_name = await req.body.fullName || req.body.full_name;
    let phone_number = await req.body.phoneNumber || req.body.phone_number;
    let province_id = await req.body.provinceId || req.body.province_id;
    let district_id = await req.body.districtId || req.body.district_id;
    let address_detail = await req.body.addressDetail || req.body.address_detail;
    let username = await req.body.username;
    let hashedPassword = await md5(req.body.password);
    let checkUsername = await UserUtil.checkUsername(username)
    if (checkUsername > 0) {
        res.json({
            code: 403,
            message: 'Username đã được sử dụng'
        })
    }
    else {
        let sql = `INSERT INTO User (username, password, full_name, phone_number, province_id, district_id, address_detail)
                    VALUES ('${username}', '${hashedPassword}', '${full_name}', '${phone_number}', ${province_id}, ${district_id}, '${address_detail}');`;
        conn.query(sql, (err, rs) => {
            if (err) throw err;
            else {
                res.json({
                    code: 200,
                    message: 'Đăng ký tài khoản thành công'
                })
            }
        })
    }
}
module.exports.getUserById = (req, res, next) => {
    const { user_id } = req.body
    if (user_id) {
        let sql = `SELECT * FROM User WHERE user_id ="${user_id}"`
        conn.query(sql, (err, rs) => {
            if (err) throw err;
            //rs[0].password = undefined;
            res.json({
                code: 200,
                result: rs[0]
            })
        })
    }
}
module.exports.updateUser = (req, res, next) => {
    const {
        user_id,
        full_name,
        phone_number,
        province_id,
        district_id,
        address_detail,
        username,
        password
    } = req.body;
    let hashedPassword = md5(password)
    let sql = `UPDATE User SET username = '${username}',`
        + ` password = '${hashedPassword}',`
        + ` full_name = '${full_name}',`
        + ` phone_number = '${phone_number}',`
        + ` province_id = '${province_id}',`
        + ` district_id = '${district_id}',`
        + ` address_detail = '${address_detail}'`
    if (password) {
        sql = sql + `, password = '${hashedPassword}'`
    }
    sql += ` WHERE user_id = '${user_id}';`;
    conn.query(sql, (err, rs) => {
        if (err) throw err;
        else {
            res.json({
                code: 200,
                message: 'Cập Nhật Thành Công'
            })
        }
    })

}
module.exports.deleteUser = async (req, res, next) => {
    const {user_id} = req.body;
    let checkUserId = await UserUtil.checkUserId(user_id);
    console.log(checkUserId);
    
    if(checkUserId){
        let sql = `DELETE FROM User WHERE user_id = '${user_id}';`
        conn.query(sql, (err, rs) => {
            if (err) throw err;
            else {
                res.json({
                    code: 200,
                    message: 'Xoá Thông Tin Khách Hàng Thành Công'
                })
            }

        })
    }
    else{
        res.json({
            code: 403,
            message: 'Có Lỗi Sảy Ra, Vui Lòng Thử  Lại'
        })
    }


}