const express = require('express');
const router = express.Router();
const axios = require('axios');

router.post('/', async (req, res, next)=>{
    const district_id = parseInt(req.body.district_id)
    const shipFee = await new Promise((resolve, reject)=>{
        axios.post('https://dev-online-gateway.ghn.vn/apiv3-api/api/v1/apiv3/FindAvailableServices',
            {
                token: "TokenStaging",
                Weight: 300,
                Length: 25,
                Width: 15,
                Height: 10,
                FromDistrictID: 1455,
                ToDistrictID: district_id
            }
        ).then((rs)=>{
            return resolve(parseInt(rs.data.data[0].ServiceFee))
        }).catch(err=>{
            return reject(err)
        })
    })
    res.json({
        code :200,
        result : shipFee
    })
})     

module.exports = router;