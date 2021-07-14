const express = require('express');
const app = express();
const cors = require('cors');
const productRouter = require('./routes/product-routes');

app.use(express.json());
app.use(cors());

app.use('/api/v1/products', productRouter);

module.exports = app;
