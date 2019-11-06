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
module.exports.getInfoCategory = (req, res, next)=>{
    const {category_id} =  req.body;
    if(category_id){
        let sql = `SELECT * FROM Category WHERE category_id = ${category_id};`;
        conn.query(sql, (err, rs)=>{
            if(err) throw err;
            else{
                res.json({
                    code: 200,
                    result: rs[0]
                })
            }
        })
    }
}
module.exports.updateInfoCategory = (req, res,next)=>{
    const {category_id, category_name} =req.body
    console.log(category_id, category_name);
    if(category_id && category_name){
        let sql = `UPDATE Category SET category_name = '${category_name}' WHERE category_id = '${category_id}';`
        conn.query(sql, (err, rs)=>{
            if(err) throw err;
            else{
                res.json({
                    code: 200,
                    message: 'Cập Nhật Loại Sản Phẩm Thành Công'
                })
            }
        })
    }
}
module.exports.deleteInfoCategory = async (req, res, next)=>{
    const {category_id} = req.body;
    let checkNumberProductOfCategory = await CategoryUtil.checkNumberProductOfCategory(category_id);
    if(checkNumberProductOfCategory !== 0){
        res.json({
            code: 403,
            message: `Vui Lòng Xoá ${checkNumberProductOfCategory} Sản Phẩm Của Loại Sản Phẩm Này Trước Khi Thực Hiện`
        })
    }
    else{
        if(category_id){
            sql = `DELETE FROM Category WHERE category_id = '${category_id}';`
            conn.query(sql, (err, rs)=>{
                if(err) throw err;
                else{
                    res.json({
                        code: 200,
                        message: 'Xoá Thông Tin Loại Sản Phẩm Thành Công'
                    })
                }
            })
        }
    }
}