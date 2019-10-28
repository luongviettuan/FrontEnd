const conn = require('../model/config');
var OrderUtil = {};

OrderUtil.exitsOrderId = function(orderId){
    return new Promise(function(resolve, reject){
        let sql = `SELECT * FROM queenok.Order WHERE order_id = ${orderId}`;
        conn.query(sql, (err, rs)=>{
            if(err) reject(err)
            else{
                console.log(rs.length);
                return resolve(rs.length);
            }
        })
    })
}
OrderUtil.jsonToObject = function(cartItems){
    let cart = []
    cartItems.map(item => {
        let temp = JSON.parse(item[1]);
        cart = [...cart, temp]
    })
    return cart;
}
module.exports = OrderUtil;