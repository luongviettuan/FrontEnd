const conn = require('../model/config');
const HelpUtil = require('../util/Help.Util');

module.exports.getAllCommentOfProduct = async (req,res,next) => {
    let productId = req.params.productId;
    let sql = `SELECT * FROM Review WHERE product_id = ${productId}`;
    await conn.query(sql, (err, rs)=>{
        if(err) throw err;
        else{
            rs.sort(function(cmt1, cmt2){
                if(cmt1.date > cmt2.date)   return 1;
                else if(cmt1.date < cmt2.date) return -1;
                else return 0;
            })
            rs.map(function(item){
                return {
                    ...item,
                    ...item.date = HelpUtil.stringToDate(item.date)
                }
            })
            res.json({
                code : 200,
                result : rs
            })
        }
    })

}