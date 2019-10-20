const express = require('express');
const router = express.Router();
const axios = require('axios');

router.post('/', (req, res, next)=>{
    const district_id = req.body.district_id
    axios.post('https://dev-online-gateway.ghn.vn/apiv3-api/api/v1/apiv3/FindAvailableServices',
            {
                token: "TokenStaging",
                Weight: 300,
                Length: 25,
                Width: 15,
                Height: 10,
                FromDistrictID: 1455,
                ToDistrictID: parseInt(district_id)
            }
        ).then(rs => {
            const ServiceID = parseInt(rs.data.data[0].ServiceID)
                axios.post('https://dev-online-gateway.ghn.vn/apiv3-api/api/v1/apiv3/CalculateFee',
                    {
                        token: "TokenStaging",
                        Weight: 300,
                        Length: 25,
                        Width: 15,
                        Height: 10,
                        FromDistrictID: 1542,
                        ToDistrictID: parseInt(district_id),
                        ServiceID: ServiceID,
                        OrderCosts: [],
                        CouponCode: "",
                        InsuranceFee: 0
                    }
                ).then(rs=>{
                    res.json({
                        code :200,
                        result : rs.data.data.CalculatedFee
                    })
                    
                })
                
        }).catch(err=>{
            throw err
        })
    }
)     

module.exports = router;