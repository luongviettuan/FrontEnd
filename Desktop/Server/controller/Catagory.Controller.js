const conn = require('../model/config')
module.exports.getItemOfCatagory = (req, res, next) =>{
    let catagoryId = req.params.catagoryId;
    let sql = `select * from Product where catagory_id = "${catagoryId}";`
    conn.query(sql, (err, rs)=>{
        if(err) throw err;
        else{
            res.json(rs)
        }
    })
}
