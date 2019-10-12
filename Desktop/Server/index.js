const express = require('express')
const app = express()
const port = 8080;
var jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
app.use(cookieParser());
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    next();
});

var UserRouter = require('./router/User.Router')
app.use('/user', UserRouter)

const ProductRouter = require('./router/Product.Router');
app.use('/product', ProductRouter)

const CategoryRouter = require('./router/Category.Router');
app.use('/category', CategoryRouter);

const RegitsterRouter = require('./router/Regitster.Router');
app.use('/regitster', RegitsterRouter)

const BrandRouter = require('./router/Brand.Router');
app.use('/brand', BrandRouter)

const VoucherRouter = require('./router/Voucher.Router');
app.use('/voucher', VoucherRouter)

const LocaltionRouter = require('./router/Location.Router');
app.use('/location',LocaltionRouter)

app.use((req, res, next)=>{
    const token =
    req.body.token ||
    req.query.token ||
    req.headers['x-access-token'] ||
    req.cookies.token;
    console.log(token);
    
    if (!token) {
        res.status(401).send('Unauthorized: No token provided');
        return;
    } else {
        jwt.verify(token, 'queenok', function(err, decoded) {
          if (err) {
            res.status(401).send('Unauthorized: Invalid token');
            return;
          } else {
            req.username = decoded.username;
            next();
          }
        });
    }
})



const OrderRouter = require('./router/Order.Router');
app.use('/order', OrderRouter);

const ReviewRouter = require('./router/Review.Router')
app.use('/review', ReviewRouter);


app.listen(port, () => console.log(`Server listening on port ${port}!`))