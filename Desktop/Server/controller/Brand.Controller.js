const conn = require('../model/config')
const BrandUtil = require('../util/Brand.Util');
module.exports.getAllBrand = (req, res, next)=>{
    let sql = `SELECT Brand.brand_name, Brand.brand_id, Brand.brand_img_url, COUNT(product_id) as quatity`
            +` FROM Brand`
            +` left join Product`
            +` on Brand.brand_id = Product.brand_id`
            +` group by (brand_id)`;
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
module.exports.findInfoBrand = (req, res, next) =>{
    let q = req.body.q;
    let sql = "Select * from Brand"
        + " inner join("
        + " SELECT brand_id , COUNT(*) as quatity"
        + " FROM Product"
        + " GROUP BY brand_id) as temp"
        + " on Brand.brand_id = temp.brand_id"
        + ` where concat(brand_name, quatity) like "%${q}%"`;
    conn.query(sql, (err, rs)=>{
        if(err) throw err;
        else{
            res.json({
                code:200,
                result : rs
            })
        }
    })
}
module.exports.getProductByBrand =(req, res, next) =>{
    let brand_id = req.params.brandId;
    let sql = `select * from Product inner join Brand on Product.brand_id = Brand.brand_id where Brand.brand_id = ${brand_id}`;
    conn.query(sql, (err,rs )=>{
        if(err) throw err;
        else{
            res.json({
                code : 200,
                result : rs
            })
        }
    })
}
module.exports.createInfoBrand = async (req, res, next) =>{
    const {brand_name, brand_img_url}= req.body;
    let checkBrandName = await BrandUtil.checkBrandName(brand_name);
    if(checkBrandName > 0){
        res.json({
            code: 403,
            message: 'Thương Hiệu Đã Tồn Tại Trong Hệ Thống'
        })
    }
    else{
        let sql=`INSERT INTO Brand (brand_name, brand_img_url) VALUES ("${brand_name}", "${brand_img_url}");`
        conn.query(sql, (err, rs)=>{
            if(err) throw err;
            else{
                res.json({
                    code: 200,
                    message: 'Thêm Thông Tin Thương Hiệu Thành Công'
                })
            }
        })
    }
}
module.exports.getInfoBrand = (req, res, next) =>{
    const {brand_id} = req.body;
    if(brand_id){
        let sql = `SELECT * FROM Brand WHERE brand_id = "${brand_id}";`
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
module.exports.updateInfoBrand = (req,res,next)=>{
    const {brand_name, brand_img_url, brand_id} = req.body;
    if(brand_id && brand_name && brand_img_url){
        let sql = `UPDATE Brand SET `
            +` brand_name = '${brand_name}',`
            +` brand_img_url = '${brand_img_url}'`
            +`WHERE brand_id = '${brand_id}';`
        conn.query(sql, (err, rs)=>{
            if(err) throw err;
            else{
                res.json({
                    code: 200,
                    message: 'Cập Nhật Thương Hiệu Thành Công'
                })
            }
        })
    }
}
module.exports.deleteInfoBrand = async (req, res, next) =>{
    const {brand_id} = req.body;
    let checkNumberProductOfBrand = await BrandUtil.checkNumberProductOfBrand(brand_id);
    if(checkNumberProductOfBrand > 0){
        res.json({
            code: 403,
            message: `Vui Lòng Xoá ${checkNumberProductOfBrand} Sản Phẩm Của Loại Sản Phẩm Này Trước Khi Thực Hiện`
        })
    }
    else{
        if(brand_id){
            sql = `DELETE FROM Brand WHERE brand_id = '${brand_id}';`
            conn.query(sql, (err, rs)=>{
                if(err) throw err;
                else{
                    res.json({
                        code: 200,
                        message: 'Xoá Thông Tin Thương Hiệu Thành Công'
                    })
                }
            })
        }
    }
}