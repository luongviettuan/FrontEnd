const conn = require('../model/config');
const HelpUtil = require('../util/Help.Util');
const ProductUtil = require('../util/Product.Util');
module.exports.getAllProduct = (req, res, next) => {
    let sql = "select * from Product"
        + " inner join Brand"
        + " on Product.brand_id = Brand.brand_id"
        + " inner join Category"
        + " on Product.category_id = Category.category_id ";
    conn.query(sql, (err, rs) => {
        if (err) throw err;
        else (
            res.json(rs)
        )
    })
}
module.exports.findInfoProduct = (req, res, next) => {
    let q =req.body.q
    let sql = "select * from Product"
        + " inner join Brand"
        + " on Product.brand_id = Brand.brand_id"
        + " inner join Category"
        + " on Product.category_id = Category.category_id"
        + ` where concat(product_name, brand_name, category_name) like "%${q}%"`

    conn.query(sql, (err, rs) => {
        if (err) throw err;
        else (
            res.json({
                code : 200,
                result : rs
            })
        )
    })
}
module.exports.searchProductByName = (req, res, next) => {
    let q = req.query.q;
    let sql = `select product_id, product_name, product_image_url, price from Product where product_name like "%${q}%"`;
    conn.query(sql, [q], (err, rs) => {
        if (err) throw err;
        else (
            res.json({ code: 200, result: rs })
        )
    })
}
module.exports.getProductById = (req, res, next) => {
    let productId = req.params.productId;
    let sql = `SELECT * FROM queenok.Product INNER JOIN Brand ON Product.brand_id = Brand.brand_id WHERE product_id  = ${productId}`
    conn.query(sql, (err, rs) => {
        if (err) throw err;
        else {
            let size = HelpUtil.stringToArray(rs[0].size);
            let color = HelpUtil.stringToArray(rs[0].color);
            let resutl = { ...rs[0], size: size, color: color }
            res.json({
                code: 200,
                result: resutl
            })

        }
    })
}
module.exports.createInfoProduct = (req, res,next)=>{
    console.log(req.body);
    
   const objData = ProductUtil.hashObject(req.body);
   if(objData){
        sql = `INSERT INTO Product (product_name, product_image_url, price, brand_id, category_id, status, description, size, color, overview)`
            +` VALUES ('${objData.product_name}', '${objData.product_image_url}', '${objData.price}', '${objData.brand_id}', '${objData.category_id}', '${objData.status}', '${objData.description}', '${objData.size}', '${objData.color}', '${objData.overview}');`;
        conn.query(sql, (err, rs)=>{
            if(err) throw err;
            else{
                res.json({
                    code: 200,
                    message: 'Thêm Thông Tin Sản Phẩm Thành Công'
                })
            }
        })

    }
}

module.exports.updateInfoProduct =(req, res, next) =>{
    const objData = ProductUtil.hashObject(req.body);
    if(objData){
        let sql = `UPDATE Product SET`
                +` product_name = '${objData.product_name}',`
                +` product_image_url = '${objData.product_image_url}',`
                +` price = '${objData.price}',`
                +` brand_id = '${objData.brand_id}',`
                +` category_id = '${objData.category_id}',`
                +` status = '${objData.status}',`
                +` description = '${objData.description}',`
                +` size = '${objData.size}',`
                +` color = '${objData.color}',`
                +` overview = '${objData.overview}'`
                +` WHERE product_id = '${objData.product_id}';`

        conn.query(sql, (err, rs)=>{
            if(err) throw err;
            else{
                res.json({
                    code: 200,
                    message: 'Cập Nhật Thông Tin Sản Phẩm Thành Công'
                })
            }
        })

    }
    
}
module.exports.deleteInfoProduct = async (req, res,next)=>{
    const {product_id} = req.body;
    let check_product_id = await ProductUtil.checkProductInOrder(product_id)
    if(check_product_id > 0){
        res.json({
            code: 403,
            message: 'Sản Phẩm Đang Tồn Tại Trong Đơn Hàng, Không Thể Xoá'
        })
    }
    else{
        let sql = `DELETE FROM Product WHERE product_id = '${product_id}';`
        conn.query(sql, (err, rs)=>{
            if(err) throw err;
            else{
                res.json({
                    code: 200,
                    message: 'Xoá Thông Tin Sản Phẩm Thành Công'
                })
            }
        })
    }
    
}