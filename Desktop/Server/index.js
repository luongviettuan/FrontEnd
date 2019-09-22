const express = require('express')
const app = express()
const port = 8080;

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

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

const OrderRouter = require('./router/Order.Router');
app.use('/order', OrderRouter);

const LocaltionRouter = require('./router/Location.Router');
app.use('/location',LocaltionRouter)

const ReviewRouter = require('./router/Review.Router')
app.use('/review', ReviewRouter);


app.listen(port, () => console.log(`Server listening on port ${port}!`))