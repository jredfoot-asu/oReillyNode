const path = require('path');
const rootDir = require('../util/path')
const express = require('express');
const router = express.Router();
const adminData = require('./admin')

router.get('/', (req, res, next) => {
    // console.log('In another middleware!');
    // console.log(adminData.products);
    const products = adminData.products;
    // res.sendFile(path.join(rootDir, 'views', 'shop.html'))
    // Used for handlebars
    res.render('shop', {pageTitle: 'Shop', prods: products, path: '/', hasProducts: products.length > 0, activeShop: true});
})

module.exports = router;