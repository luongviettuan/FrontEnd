const conn = require('../model/config')
const ProductUtil = {}

ProductUtil.hashObject = (objInput) => {
    let objOutput = {};
    objOutput.product_id = objInput.product_id;
    objOutput.product_name = objInput.product_name;
    objOutput.price = objInput.price;
    objOutput.brand_id = objInput.brand_id;
    objOutput.category_id = objInput.category_id;
    objOutput.product_image_url = objInput.product_image_url;
    if (objInput.status) {
        if (objInput.status === true) objOutput.status = 'Còn Hàng';
        else objOutput.status = 'Hết Hàng';
    }
    if (objInput.color) {
        let colorStr = '';
        for (i in objInput.color) {
            if (objInput.color[i] === true) colorStr += i + ' ';
        }
        objOutput.color = colorStr.trim().replace(/ /g, ', ');
    }
    if (objInput.size) {
        let sizeStr = '';
        for (i in objInput.size) {
            if (objInput.size[i] === true) sizeStr += i + ' ';
        }
        objOutput.size = sizeStr.trim().replace(/ /g, ', ');
    }
    objOutput.description = objInput.description;
    objOutput.overview = objInput.overview;

    return objOutput;
}
ProductUtil.checkProductInOrder = function(product_id){
    if(product_id){
        return new Promise((resolve, reject)=>{
            let sql = `SELECT * FROM queenok.OrderLine
                inner join queenok.Order
                on OrderLine.order_id = queenok.Order.order_id
                where product_id = '${product_id}'`;
            conn.query(sql, (err, rs)=>{
                if(err) return reject(err)
                else{
                    return resolve(rs.length)
                }
            })
        })
    }
}

module.exports = ProductUtil;