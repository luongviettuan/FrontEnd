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
module.exports.getProductByOrder = (req,res, next)=>{
    const {order_id} = req.body;
    let sql = `SELECT quatity, OrderLine.size, OrderLine.color, product_name FROM OrderLine`
            + ` inner join Product`
            + ` on Product.product_id = OrderLine.product_id`
            + ` where order_id = "${order_id}"`;
    conn.query(sql, (err,rs)=>{
        if(err) throw err;
        else{
            res.json({
                code : 200,
                result : rs
            })
        }
    })
}
module.exports.findInfoOrder = (req, res, next)=>{
    const {q} = req.body;
    let sql = `SELECT * FROM queenok.Order`
        +` where order_id like "${q}%"`
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
module.exports.updateInfoOrder = (req, res, next)=>{
    const listUpdateOrder = req.body;
    Promise.all([
        listUpdateOrder.map(order=>
            new Promise((resolve, reject)=>{
                let sql = `UPDATE queenok.Order SET status = '${order.status}' WHERE order_id = '${order.order_id}';`;
                conn.query(sql, (err, rs)=>{
                    if(err) reject(err)
                    else{
                        resolve(rs)
                    }
                })
            })   
        )
    ]).then(rs => { 
        res.json({
            code: 200,
            message: 'Cập Nhật Danh Sách Đơn Hàng Thành Công'
        });
      }).catch(err => { 
        res.json({
            code: 403,
            message: 'Có Lỗi Sảy Ra, Vui Lòng Thử Lại Sau'
        })
      });
}