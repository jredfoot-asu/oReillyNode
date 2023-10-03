const path = require('path');
const rootDir = require('../util/path')
const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
    res.status(404).render('404', {pageTitle: '404 - Page Not Found'})
});

module.exports = router;