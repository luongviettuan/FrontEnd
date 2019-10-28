const shortid = require('shortid');
const waterfall = require('async-waterfall');
const conn = require('../model/config')
const OrderUtil = require('../util/Order.Util')

module.exports.getAllOrder = (req,res,next)=>{
    let sql = "SELECT * FROM queenok.Order";
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
module.exports.deleteOrder = async (req, res, next) =>{
    let orderId = await req.params.orderId;
    let sql = `DELETE FROM queenok.Order WHERE order_id = ${orderId}`;
    let exitsOrderId = await OrderUtil.exitsOrderId(orderId);
    if(exitsOrderId == 0 ){
        return res.json({
            code : 0,
            messenge : 'Hệ thống không tồn tại đơn hàng này'
        })
    } 
    conn.query(sql, (err, rs)=>{
        if(err) throw err;
        else{
            res.json({
                code : 200,
                messenge : "Huỷ đơn hàng thành công"
            })
        }
    })
}
module.exports.createOrder = (req, res, next)=>{
    const order_id = shortid.generate();
    const {
        user_id,
        province_id,
        district_id,
        voucher_id,
        total,
        cartItems
    } = req.body
    let cart = OrderUtil.jsonToObject(cartItems)
    let sql1 = `INSERT INTO queenok.Order (order_id, user_id, province_id, district_id, voucher_id, status, total)`

    + ` VALUES ("${order_id}", "${user_id}", "${province_id}", "${district_id}", "${voucher_id}", "Chờ Xác Nhận", "${total}")`;
    conn.query(sql1, (err, rs)=>{
        if(err) throw err;
        else(
            cart.map(item=>{
                let sql2 = `INSERT INTO OrderLine (product_id, quatity, size, color, order_id)`
                    + ` VALUES ("${item.product_id}", "${item.unit}", "${item.size}", "${item.color}", "${order_id}")`;
                conn.query(sql2, (err, rs)=>{
                    if(err) throw err;
                })
            })
        )
    })
}
module.exports.getOrderByUser = (req, res, next) =>{
    const {user_id} =  req.body;
    let sql = `SELECT * FROM queenok.Order where user_id = ${user_id};`;
    conn.query(sql, (err, rs)=>{
        if(err) throw err;
        else{
            res.json({
                code: 200,
                result : rs
            })
        }
    })
}