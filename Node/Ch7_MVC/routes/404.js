const path = require('path');
const rootDir = require('../util/path')
const express = require('express');
const router = express.Router();
const ErrorController = require('../controllers/404');

router.use(ErrorController.get404Page);

module.exports = router;