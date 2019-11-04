const conn = require('../model/config')
const CategoryUtil = require('../util/Category.Util');
module.exports.getAllCategory = (req, res, next) =>{
    let sql = `SELECT Category.category_name, Category.category_id, COUNT(product_id) as quatity`
            +` FROM Category`
            +` left join Product`
            +` on Category.category_id = Product.category_id`
            +` group by (category_id)`
    
    
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
module.exports.findCategory = (req, res, next) => {
    let q = req.body.q
    let sql = "Select * from Category"
        + " inner join("
        + " SELECT category_id , COUNT(*) as quatity"
        + " FROM Product"
        + " GROUP BY category_id) as temp"
        + " on Category.category_id = temp.category_id"
        + ` where concat(category_name, quatity) like "%${q}%"`;
    conn.query(sql, (err, rs) =>{
        if(err) throw err;
        else{
            res.json({
                code :200,
                result : rs
            })
        }
    })
    
}
module.exports.getProductOfCategory = (req, res, next) =>{
    let categoryId = req.params.categoryId;
    let sql = `select * from Product where category_id = "${categoryId}";`
    conn.query(sql, (err, rs)=>{
        if(err) throw err;
        else{
            res.json(rs)
        }
    })
}
module.exports.createCategory = async (req, res, next) =>{
    let {category_name} = req.body;
    let checkCategoryName = await CategoryUtil.checkCategoryname(category_name);
    if(checkCategoryName !==0){
        res.json({
            code: 403,
            message: 'Loại Sản Phẩm Đã Tồn Tại Trong Hệ Thống'
        })
    }
    else{
        let sql=`INSERT INTO Category (category_name) VALUES ("${category_name}");`
        conn.query(sql, (err, rs)=>{
            if(err) throw err;
            else{
                res.json({
                    code: 200,
                    message: 'Thêm Thông Tin Thành Công'
                })
            }
        })
    }
}