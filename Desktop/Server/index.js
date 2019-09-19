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

const CatagoryRouter = require('./router/Catagory.Router');
app.use('/catagory', CatagoryRouter);



app.listen(port, () => console.log(`Server listening on port ${port}!`))