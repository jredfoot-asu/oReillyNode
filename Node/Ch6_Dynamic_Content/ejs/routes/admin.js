const path = require('path');
const rootDir = require('../util/path')
const express = require('express');
const router = express.Router();

 const products = [];

router.get('/add-product', (req, res, next) => {
    // console.log('In another middleware!');
    // Used for handlebars
    res.render('add-product', {pageTitle: 'Add Product', path: '/admin/add-product', activeAddProduct: true})
})


router.post('/add-product', (req, res, next) => {
    products.push({ title: req.body.title })
    res.redirect('/');
})

exports.routes = router;
exports.products = products;