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